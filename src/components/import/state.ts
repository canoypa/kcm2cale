import { atom } from 'recoil'

export type FleetImportDialogState = boolean

export const FleetImportDialogStateAtom = atom<FleetImportDialogState>({
  key: 'fleet_import_dialog_state',
  default: false,
})
