import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { FleetImportDialogStateAtom } from './state'

export const useImportFleet = () => {
  const setFleetImportDialogState = useSetRecoilState(
    FleetImportDialogStateAtom,
  )

  const requestImport = useCallback(
    () => setFleetImportDialogState(true),
    [setFleetImportDialogState],
  )

  return requestImport
}
