import { Link as MuiLink } from '@mui/material'
import NextLink, { LinkProps } from 'next/link'
import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<
  LinkProps & {
    /** string 型のみに上書き */
    href: string
    /** 外部リンクか */
    ext?: true
    /** 新しいタブで開くか */
    newTab?: true
  }
>
export const TextLink: FC<Props> = ({
  href,
  ext,
  newTab,
  children,
  ...props
}) => {
  return (
    <MuiLink
      component={NextLink}
      href={href}
      target={newTab && '_blank'}
      rel={ext && 'noopener noreferrer'}
      {...props}
    >
      {children}
    </MuiLink>
  )
}
