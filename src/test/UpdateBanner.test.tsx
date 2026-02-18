import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UpdateBanner from '../components/UpdateBanner';

// ============================================================
// Tests para UpdateBanner.tsx
// Cubre todos los estados del banner de actualización
// ============================================================

const defaultProps = {
  available: null,
  progress: null,
  ready: false,
  updateError: null,
  onDownload: vi.fn(),
  onInstall: vi.fn(),
};

describe('UpdateBanner - sin estado activo', () => {
  it('no renderiza nada cuando todo está en null/false', () => {
    const { container } = render(<UpdateBanner {...defaultProps} />);
    expect(container.firstChild).toBeNull();
  });
});

describe('UpdateBanner - actualización disponible', () => {
  it('muestra la versión disponible', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" />);
    expect(screen.getByText(/v1\.0\.4/)).toBeInTheDocument();
  });
  it('muestra el botón Descargar', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" />);
    expect(screen.getByRole('button', { name: /Descargar/i })).toBeInTheDocument();
  });
  it('llama onDownload al hacer click', async () => {
    const onDownload = vi.fn();
    render(<UpdateBanner {...defaultProps} available="1.0.4" onDownload={onDownload} />);
    await userEvent.click(screen.getByRole('button', { name: /Descargar/i }));
    expect(onDownload).toHaveBeenCalledOnce();
  });
});

describe('UpdateBanner - descargando', () => {
  it('muestra porcentaje de descarga', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" progress={45} />);
    expect(screen.getByText(/45%/)).toBeInTheDocument();
  });
  it('muestra "Descargando" cuando progress < 100', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" progress={75} />);
    expect(screen.getByText(/Descargando/i)).toBeInTheDocument();
  });
  it('muestra "Verificando" cuando progress === 100', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" progress={100} />);
    expect(screen.getByText(/Verificando/i)).toBeInTheDocument();
  });
  it('NO muestra porcentaje cuando está verificando (progress=100)', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" progress={100} />);
    expect(screen.queryByText(/100%/)).not.toBeInTheDocument();
  });
  it('no muestra botón de instalar mientras descarga', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" progress={50} />);
    expect(screen.queryByRole('button', { name: /Reiniciar/i })).not.toBeInTheDocument();
  });
});

describe('UpdateBanner - lista para instalar', () => {
  it('muestra "Actualizacion lista"', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" ready={true} />);
    expect(screen.getByText(/Actualizacion lista/i)).toBeInTheDocument();
  });
  it('muestra el botón Reiniciar ahora', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" ready={true} />);
    expect(screen.getByRole('button', { name: /Reiniciar ahora/i })).toBeInTheDocument();
  });
  it('llama onInstall al hacer click en Reiniciar', async () => {
    const onInstall = vi.fn();
    render(<UpdateBanner {...defaultProps} available="1.0.4" ready={true} onInstall={onInstall} />);
    await userEvent.click(screen.getByRole('button', { name: /Reiniciar ahora/i }));
    expect(onInstall).toHaveBeenCalledOnce();
  });
  it('ready tiene prioridad sobre progress', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" progress={100} ready={true} />);
    expect(screen.getByText(/Actualizacion lista/i)).toBeInTheDocument();
    expect(screen.queryByText(/Verificando/i)).not.toBeInTheDocument();
  });
});

describe('UpdateBanner - error de actualización (nuevo en v1.0.3)', () => {
  it('muestra banner rojo cuando hay error', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" updateError="sha512 mismatch" />);
    expect(screen.getByText(/Error al actualizar/i)).toBeInTheDocument();
  });
  it('muestra botón Reintentar cuando hay error', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" updateError="network error" />);
    expect(screen.getByRole('button', { name: /Reintentar/i })).toBeInTheDocument();
  });
  it('llama onDownload al hacer click en Reintentar', async () => {
    const onDownload = vi.fn();
    render(<UpdateBanner {...defaultProps} available="1.0.4" updateError="error" onDownload={onDownload} />);
    await userEvent.click(screen.getByRole('button', { name: /Reintentar/i }));
    expect(onDownload).toHaveBeenCalledOnce();
  });
  it('error tiene prioridad sobre progreso', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" progress={100} updateError="error" />);
    expect(screen.getByText(/Error al actualizar/i)).toBeInTheDocument();
    expect(screen.queryByText(/Verificando/i)).not.toBeInTheDocument();
  });
  it('ready tiene prioridad sobre error', () => {
    render(<UpdateBanner {...defaultProps} available="1.0.4" ready={true} updateError="error" />);
    expect(screen.getByText(/Actualizacion lista/i)).toBeInTheDocument();
    expect(screen.queryByText(/Error al actualizar/i)).not.toBeInTheDocument();
  });
});