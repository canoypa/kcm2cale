'use client'

import { NavigateBefore } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { FC, useCallback } from 'react'
import {
  EquipGroupMap,
  EquipGroupValues,
  equipGroupFilter,
} from '~/core/filters/equip'
import { EquipSearch } from '~/core/search/equip'
import { OrganizeSelectSearchRenderer } from '../../select-fleet-item/search-renderer'
import { useSearchQuery } from '../hooks/search-query'
import { SearchEquipsList } from '../search-equips-list'

/**
 * 原因不明のエラー
 * `Uncaught TypeError: Cannot read property 'getAttribute' of null`
 *
 * - keyDown で発生
 * - いずれかの要素に focus されているとエラーにならない
 */

const isEquipGroupValue = (n: number): n is EquipGroupValues =>
  n >= 0 && n <= 21

type SelectEquipProps = {
  onSelect: (equipNoToSet: number) => void
  onClose: () => void
}
const SelectEquip: FC<SelectEquipProps> = ({ onSelect, onClose }) => {
  const { query: searchQuery, setQuery, setTypes } = useSearchQuery()

  const handler = {
    filterChange: useCallback(
      (filter: number | null) => {
        if (filter === null) {
          setTypes(null)
        } else {
          if (isEquipGroupValue(filter)) {
            setTypes(EquipGroupMap[filter])
          }
        }
      },
      [setTypes],
    ),

    onChangeQuery: useCallback((value: string) => setQuery(value), [setQuery]),
  }

  const equipsList = EquipSearch.search(searchQuery)

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
          <Typography variant="h6">装備を選択</Typography>
        </Toolbar>
      </AppBar>
      <SearchEquipsList equipsList={equipsList} onSelect={onSelect} />
      <OrganizeSelectSearchRenderer
        filterGroup={equipGroupFilter}
        changeFilter={handler.filterChange}
        changeQuery={handler.onChangeQuery}
      />
    </>
  )
}
export default SelectEquip
