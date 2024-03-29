import { Box } from '@mui/material'
import { ChangeEventHandler, FC, useState } from 'react'
import { LocalFleetDataV1 } from '~/core/persistence/types'
import { searchFleet } from '../../../core/search/fleet'
import { SearchBox } from '../../common/search-box'
import { FleetCard } from '../fleet-card'

type Props = {
  fleetList: LocalFleetDataV1[]

  refresh: () => void
}
export const FleetList: FC<Props> = ({ fleetList, refresh }) => {
  const [query, setQuery] = useState<string>('')

  const searchedFleetList = searchFleet(fleetList, { q: query })

  const changeQuery: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <Box mb={2}>
        <SearchBox
          fullWidth
          placeholder="編成を検索"
          value={query}
          onChange={changeQuery}
        />
      </Box>

      <Box display="grid" rowGap={2}>
        {searchedFleetList.map((v) => (
          <FleetCard key={v.id} fleetData={v} refresh={refresh} />
        ))}
      </Box>
    </div>
  )
}
