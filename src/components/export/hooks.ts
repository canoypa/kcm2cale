import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { FleetExportDialogState, FleetExportDialogStateAtom } from './state'

export const useExportFleet = () => {
  const setFleetExportDialogState = useSetRecoilState(
    FleetExportDialogStateAtom,
  )

  const requestExport = useCallback(
    (option: FleetExportDialogState) => setFleetExportDialogState(option),
    [setFleetExportDialogState],
  )

  return requestExport
}
