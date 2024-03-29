import { useCallback } from 'react'
import useSWR from 'swr'
import { RiggingPlace } from '~/models/equip'
import { FleetPlace } from '~/models/ship'
import { useSetEquip } from '../SelectEquipDialog/hooks/set-equip'

export type SelectEquipState =
  | { open: true; target: FleetPlace & RiggingPlace }
  | { open: false; target: null }

const defaultState: SelectEquipState = {
  open: false,
  target: null,
}

const useSelectEquipState = () => {
  return useSWR<SelectEquipState>('select-equip', {
    fallbackData: defaultState,
  })
}

export const useStartSelectEquip = () => {
  const { mutate } = useSelectEquipState()

  const start = useCallback(
    (target: FleetPlace & RiggingPlace) => {
      mutate({ open: true, target })
    },
    [mutate],
  )

  return start
}

export const useSelectEquip = () => {
  const setEquip = useSetEquip()

  const { data, mutate } = useSelectEquipState()

  const onClose = useCallback(() => {
    mutate(defaultState)
  }, [mutate])

  const onSelect = useCallback(
    (equipNoToSet: number) => {
      // Assertion
      if (data === undefined || data.target === null) {
        throw new Error('Error')
      }

      setEquip(data.target, equipNoToSet)
      onClose()
    },
    [data, onClose, setEquip],
  )

  return {
    open: (data as SelectEquipState)?.open,
    onSelect,
    onClose,
  }
}
