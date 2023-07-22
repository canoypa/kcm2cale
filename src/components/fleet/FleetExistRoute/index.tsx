'use client'

import { FC, useContext } from 'react'
import { useEffectOnce } from 'react-use'
import { useRecoilState } from 'recoil'
import { LocalDatabase } from '~/core/persistence/local-database'
import { LocalFleetDataV1 } from '~/core/persistence/types'
import { FleetState } from '~/store/organize/info'
import { FleetScreen } from '../FleetScreen'
import { FleetError } from '../error'
import { FleetIdContext } from '../fleetIdContext'

const existFleet = (
  fleet: LocalFleetDataV1 | null,
): fleet is LocalFleetDataV1 => {
  return fleet !== null
}

/**
 * 編成の読み込み状態に応じたコンポーネントの仕分け
 */
export const FleetExistRoute: FC = () => {
  const fleetId = useContext(FleetIdContext)
  const [fleet, setFleet] = useRecoilState(FleetState)

  useEffectOnce(() => {
    LocalDatabase.getFleet(fleetId).then((v) => {
      if (v) setFleet(v)
    })
  })

  return existFleet(fleet) ? <FleetScreen fleet={fleet} /> : <FleetError />
}
