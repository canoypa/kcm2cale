import { InputAdornment, OutlinedInput } from '@mui/material'
import { Search } from '@mui/icons-material'
import { FC, KeyboardEventHandler } from 'react'

type Props = {
  onSubmit: (value: string) => void
}
export const SearchBox: FC<Props> = ({ onSubmit }) => {
  const handlerSubmit: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSubmit(event.currentTarget?.value ?? '')
    }
  }

  return (
    <OutlinedInput
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      onKeyDown={handlerSubmit}
      sx={{
        borderRadius: 24,
        input: { p: 0, height: 48 },
      }}
    />
  )
}
