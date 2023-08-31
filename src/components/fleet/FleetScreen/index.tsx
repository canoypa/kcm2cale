import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useUnmount } from 'react-use'
import { LowerAppBar } from '~/components/common/lower-app-bar'
import { APP_NAME } from '~/core/env'
import { useLocalPersistence } from '~/core/persistence/fleet-state-observer'
import { LocalFleetDataV1 } from '~/core/persistence/types'
import { SelectEquipDialog } from '../SelectEquipDialog'
import { SelectShipDialog } from '../SelectShipDialog'
import { useSelectEquip } from '../hooks/select-equip'
import { useSelectShip } from '../hooks/select-ship'
import { Organize } from '../organisms/organize'

type Props = {
  fleet: LocalFleetDataV1 | undefined
}
/**
 * 編成画面
 */
export const FleetScreen: FC<Props> = ({ fleet }) => {
  const { push } = useRouter()
  const { justSaveNow } = useLocalPersistence()

  const {
    open: isOpenSelectShip,
    onSelect: onSelectShip,
    onClose: onCloseSelectShip,
  } = useSelectShip()

  const {
    open: isOpenSelectEquip,
    onSelect: onSelectEquip,
    onClose: onCloseSelectEquip,
  } = useSelectEquip()

  useUnmount(() => {
    justSaveNow()
  })

  const backToTopPage = () => {
    push('/')
  }

  return (
    <>
      <Head>
        <title>{`${fleet?.title || '無題の編成'} - ${APP_NAME}`}</title>
      </Head>

      <LowerAppBar onNavClick={backToTopPage} />
      <Organize />

      <SelectShipDialog
        open={isOpenSelectShip}
        onSelect={onSelectShip}
        onClose={onCloseSelectShip}
      />
      <SelectEquipDialog
        open={isOpenSelectEquip}
        onSelect={onSelectEquip}
        onClose={onCloseSelectEquip}
      />
    </>
  )
}
