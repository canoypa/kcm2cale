'use client'

import { useParams } from 'next/navigation'
import { FleetExistRoute } from '~/components/fleet/FleetExistRoute'
import { FleetIdContext } from '~/components/fleet/fleetIdContext'

export default function FleetPage() {
  const params = useParams()
  const fleetId = params?.fleetId

  if (typeof fleetId !== 'string') throw new Error()

  return (
    <>
      <FleetIdContext.Provider value={fleetId}>
        <FleetExistRoute />
      </FleetIdContext.Provider>
    </>
  )
}
