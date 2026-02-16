import type { Seccion } from './types';

export const TAB_LABELS: Record<Seccion, string> = {
  informacion: 'INFORMACIÓN',
  identificacion: 'IDENTIFICACIÓN',
  extraccion: 'EXTRACCIÓN',
  comparacion_automatica: 'COMP. AUTOMÁTICA',
  comparacion_archivos: 'COMP. ARCHIVOS',
  comparacion_manual: 'COMP. MANUAL'
};

export const ALL_TABS: Seccion[] = [
  'informacion', 'identificacion', 'extraccion',
  'comparacion_automatica', 'comparacion_archivos', 'comparacion_manual'
];

export const EXTRACTOR_TABS: Seccion[] = ['informacion', 'identificacion', 'extraccion'];
export const COMPARADOR_TABS: Seccion[] = ['informacion', 'comparacion_automatica', 'comparacion_archivos', 'comparacion_manual'];

export const TAB_COLORS: Record<Seccion, string> = {
  informacion: '#a855f7',
  identificacion: '#ffb700',
  extraccion: '#11d0d0',
  comparacion_automatica: '#ff5a5a',
  comparacion_archivos: '#ff8c42',
  comparacion_manual: '#d3c4d1'
};

export const TAB_BG_CLASSES: Record<Seccion, string> = {
  informacion: 'bg-[#a855f7]',
  identificacion: 'bg-[#ffb700]',
  extraccion: 'bg-[#11d0d0]',
  comparacion_automatica: 'bg-[#ff5a5a]',
  comparacion_archivos: 'bg-[#ff8c42]',
  comparacion_manual: 'bg-[#d3c4d1]'
};

export const URL_REGISTRADURIA = 'https://danielm0101.github.io/redirect-registraduria/';

export function getVisibleTabs(tier: string): Seccion[] {
  if (tier === 'extractor') return EXTRACTOR_TABS;
  if (tier === 'comparador') return COMPARADOR_TABS;
  return ALL_TABS;
}
