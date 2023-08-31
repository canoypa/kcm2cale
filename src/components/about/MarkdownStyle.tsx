import { styled } from '@mui/material'

export const MarkdownStyle = styled('div')(({ theme }) => ({
  padding: '24px 0',

  '& *': {
    color: theme.palette.text.primary,
  },

  '& a': {
    color: theme.palette.info.main,
  },

  '& h1, & h2, & h3, & h4, & h5, & h6': {
    lineHeight: '2em',
  },

  '& h1, & h2': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  '& main section': {
    marginBottom: '1em',
  },
}))
