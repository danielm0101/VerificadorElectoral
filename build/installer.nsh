; ============================================================
; installer.nsh — Configuracion personalizada del instalador NSIS
; Verificador Electoral - Consejo Nacional Electoral de Colombia
; ============================================================

; --- ANTES de extraer archivos ---
; Defender puede bloquear archivos de R Portable mientras se copian.
; customInit corre en .onInit, ANTES de la extraccion, con $INSTDIR
; apuntando al directorio por defecto. Asi los archivos se copian
; a una ruta ya excluida y Defender no los pone en cuarentena.
!macro customInit
  DetailPrint "Pre-configurando exclusiones de Windows Defender..."

  ; Excluir directorio de instalacion (valor por defecto, antes de que el usuario lo cambie)
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Add-MpPreference -ExclusionPath ''$INSTDIR'' -Force -ErrorAction SilentlyContinue } catch {}"'

  ; Excluir carpeta de datos de la app (%APPDATA%\Verificador Electoral)
  ; donde van config.json, resultados y scripts desencriptados en tiempo de ejecucion
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Add-MpPreference -ExclusionPath (\"$env:APPDATA\Verificador Electoral\") -Force -ErrorAction SilentlyContinue } catch {}"'
!macroend

; --- DESPUES de instalar archivos ---
; Aplica exclusiones definitivas con la ruta real de instalacion
; (por si el usuario cambio el directorio en el asistente de instalacion)
!macro customInstall
  ; === Reglas de Firewall para Rscript.exe ===
  DetailPrint "Configurando permisos de Firewall para R..."
  nsExec::ExecToLog 'netsh advfirewall firewall add rule name="Verificador Electoral - Rscript x64" dir=out action=allow program="$INSTDIR\resources\r-portable\App\R-Portable\bin\x64\Rscript.exe" enable=yes profile=any'
  nsExec::ExecToLog 'netsh advfirewall firewall add rule name="Verificador Electoral - Rscript x86" dir=out action=allow program="$INSTDIR\resources\r-portable\App\R-Portable\bin\Rscript.exe" enable=yes profile=any'

  ; === Exclusiones de Windows Defender ===
  DetailPrint "Configurando exclusiones de Windows Defender..."

  ; Excluir directorio real de instalacion (puede diferir del default si el usuario lo cambio)
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Add-MpPreference -ExclusionPath ''$INSTDIR'' -Force -ErrorAction SilentlyContinue } catch {}"'

  ; Excluir carpeta de datos (%APPDATA%\Verificador Electoral)
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Add-MpPreference -ExclusionPath (\"$env:APPDATA\Verificador Electoral\") -Force -ErrorAction SilentlyContinue } catch {}"'

  ; Excluir procesos clave como procesos (no como rutas) para mayor cobertura
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Add-MpPreference -ExclusionProcess ''$INSTDIR\resources\r-portable\App\R-Portable\bin\x64\Rscript.exe'' -Force -ErrorAction SilentlyContinue } catch {}"'
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Add-MpPreference -ExclusionProcess ''$INSTDIR\resources\r-portable\App\R-Portable\bin\Rscript.exe'' -Force -ErrorAction SilentlyContinue } catch {}"'
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Add-MpPreference -ExclusionProcess ''$INSTDIR\Verificador Electoral.exe'' -Force -ErrorAction SilentlyContinue } catch {}"'
!macroend

; --- Al desinstalar ---
!macro customUnInstall
  ; Eliminar reglas de Firewall
  nsExec::ExecToLog 'netsh advfirewall firewall delete rule name="Verificador Electoral - Rscript x64"'
  nsExec::ExecToLog 'netsh advfirewall firewall delete rule name="Verificador Electoral - Rscript x86"'

  ; Eliminar exclusiones de Windows Defender
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Remove-MpPreference -ExclusionPath ''$INSTDIR'' -Force -ErrorAction SilentlyContinue } catch {}"'
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Remove-MpPreference -ExclusionPath (\"$env:APPDATA\Verificador Electoral\") -Force -ErrorAction SilentlyContinue } catch {}"'
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Remove-MpPreference -ExclusionProcess ''$INSTDIR\resources\r-portable\App\R-Portable\bin\x64\Rscript.exe'' -Force -ErrorAction SilentlyContinue } catch {}"'
  nsExec::ExecToLog 'powershell.exe -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -Command "try { Remove-MpPreference -ExclusionProcess ''$INSTDIR\resources\r-portable\App\R-Portable\bin\Rscript.exe'' -Force -ErrorAction SilentlyContinue } catch {}"'
!macroend