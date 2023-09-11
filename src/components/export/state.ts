import { atom } from 'recoil'

export type FleetExportDialogState = null | { mode: 'all' }

export const FleetExportDialogStateAtom = atom<FleetExportDialogState>({
  key: 'fleet_export_dialog_state',
  default: null,
})
