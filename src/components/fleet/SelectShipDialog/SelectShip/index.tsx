'use client'

import { NavigateBefore } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { FC, useCallback } from 'react'
import {
  ShipSearchGroupMap,
  ShipSearchGroupValues,
  shipGroupFilter,
} from '~/core/filters/ship'
import { ShipSearch } from '~/core/search/ship'
import { OrganizeSelectSearchRenderer } from '../../select-fleet-item/search-renderer'
import { useSearchQuery } from '../hooks/search-query'
import { SearchShipsList } from '../search-ships-list'

const isShipGroupValue = (n: number): n is ShipSearchGroupValues =>
  n >= 0 && n <= 8

type SelectShipProps = {
  onSelect: (shipNoToSet: string) => void
  onClose: () => void
}
const SelectShip: FC<SelectShipProps> = ({ onSelect, onClose }) => {
  const { query: searchQuery, setQuery, setTypes } = useSearchQuery()

  const handler = {
    filterChange: useCallback(
      (filter: number | null) => {
        if (filter === null) {
          setTypes(null)
        } else {
          if (isShipGroupValue(filter)) {
            setTypes(ShipSearchGroupMap[filter])
          }
        }
      },
      [setTypes],
    ),

    onChangeQuery: useCallback((value: string) => setQuery(value), [setQuery]),
  }

  const shipsList = ShipSearch.search(searchQuery)

  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={onClose}
            aria-label="戻る"
            sx={{ mr: 1 }}
          >
            <NavigateBefore />
          </IconButton>
          <Typography variant="h6">{'艦娘を選択'}</Typography>
        </Toolbar>
      </AppBar>
      <SearchShipsList shipsList={shipsList} onSelect={onSelect} />
      <OrganizeSelectSearchRenderer
        filterGroup={shipGroupFilter}
        changeFilter={handler.filterChange}
        changeQuery={handler.onChangeQuery}
      />
    </>
  )
}
export default SelectShip
