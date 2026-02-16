!macro customInstall
  ; === Firewall rules for R Portable ===
  ; Pre-authorize Rscript.exe so Windows Firewall never prompts during app usage
  DetailPrint "Configurando permisos de Firewall para R..."
  nsExec::ExecToLog 'netsh advfirewall firewall add rule name="Verificador Electoral - Rscript" dir=out action=allow program="$INSTDIR\resources\r-portable\App\R-Portable\bin\x64\Rscript.exe" enable=yes profile=any'
  nsExec::ExecToLog 'netsh advfirewall firewall add rule name="Verificador Electoral - Rscript x86" dir=out action=allow program="$INSTDIR\resources\r-portable\App\R-Portable\bin\Rscript.exe" enable=yes profile=any'

  ; === Windows Defender exclusions ===
  ; Add exclusions so Defender doesn't flag Rscript or the app itself
  DetailPrint "Configurando exclusiones de Windows Defender..."
  nsExec::ExecToLog 'powershell -Command "Add-MpPreference -ExclusionPath \"$INSTDIR\" -ErrorAction SilentlyContinue"'
  nsExec::ExecToLog 'powershell -Command "Add-MpPreference -ExclusionProcess \"$INSTDIR\resources\r-portable\App\R-Portable\bin\x64\Rscript.exe\" -ErrorAction SilentlyContinue"'
  nsExec::ExecToLog 'powershell -Command "Add-MpPreference -ExclusionProcess \"$INSTDIR\resources\r-portable\App\R-Portable\bin\Rscript.exe\" -ErrorAction SilentlyContinue"'
  nsExec::ExecToLog 'powershell -Command "Add-MpPreference -ExclusionProcess \"$INSTDIR\Verificador Electoral.exe\" -ErrorAction SilentlyContinue"'
!macroend

!macro customUnInstall
  ; === Remove firewall rules ===
  nsExec::ExecToLog 'netsh advfirewall firewall delete rule name="Verificador Electoral - Rscript"'
  nsExec::ExecToLog 'netsh advfirewall firewall delete rule name="Verificador Electoral - Rscript x86"'

  ; === Remove Windows Defender exclusions ===
  nsExec::ExecToLog 'powershell -Command "Remove-MpPreference -ExclusionPath \"$INSTDIR\" -ErrorAction SilentlyContinue"'
  nsExec::ExecToLog 'powershell -Command "Remove-MpPreference -ExclusionProcess \"$INSTDIR\resources\r-portable\App\R-Portable\bin\x64\Rscript.exe\" -ErrorAction SilentlyContinue"'
  nsExec::ExecToLog 'powershell -Command "Remove-MpPreference -ExclusionProcess \"$INSTDIR\resources\r-portable\App\R-Portable\bin\Rscript.exe\" -ErrorAction SilentlyContinue"'
  nsExec::ExecToLog 'powershell -Command "Remove-MpPreference -ExclusionProcess \"$INSTDIR\Verificador Electoral.exe\" -ErrorAction SilentlyContinue"'
!macroend