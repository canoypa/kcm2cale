'use client'

import { Box, CircularProgress, Container } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { LocalDatabase } from '~/core/persistence/local-database'
import { LocalFleetDataV1 } from '~/core/persistence/types'
import { EmptyState } from '../empty-state'
import { FleetList } from '../fleet-list'

/**
 * 保存されている編成が存在するか
 */
const checkExistFleetList = (fleets: LocalFleetDataV1[]) => {
  return fleets.length !== 0
}

export const FleetListArea: FC = () => {
  const [_refresh, _setRefresh] = useState(0)
  const [fleetList, setFleetList] = useState<LocalFleetDataV1[] | null>(null)

  useEffect(() => {
    LocalDatabase.getAllFleet().then((v) => {
      setFleetList(v)
    })
  }, [_refresh])

  const refresh = () => {
    _setRefresh(_refresh + 1)
  }

  if (!fleetList) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress size={24} />
      </Box>
    )
  }

  // 保存されている編成が存在するか
  const isExistFleetList = checkExistFleetList(fleetList)

  return (
    <Container maxWidth="md" sx={{ height: '100%' }}>
      <Box
        display="flex"
        flexDirection="column"
        paddingTop={3}
        paddingBottom={3}
        height="100%"
      >
        {isExistFleetList ? (
          <FleetList fleetList={fleetList} refresh={refresh} />
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <EmptyState />
          </Box>
        )}
      </Box>
    </Container>
  )
}
