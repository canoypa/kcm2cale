import { AccountCircleOutlined } from '@mui/icons-material'
import { Avatar, IconButton, IconButtonProps } from '@mui/material'
import { FC } from 'react'

type UserAvatarProps = {
  size: number
}
const UserAvatar: FC<UserAvatarProps> = ({ size }) => {
  return (
    <Avatar
      sx={{
        width: size,
        height: size,
        backgroundColor: 'unset',
        color: 'inherit',
      }}
    >
      <AccountCircleOutlined />
    </Avatar>
  )
}

type UserIconProps = {
  size?: number
}
export const UserIcon: FC<UserIconProps> = ({ size = 32 }) => {
  return <UserAvatar size={size} />
}

export const UserIconButton: FC<IconButtonProps> = ({ ...props }) => {
  return (
    <IconButton sx={{ padding: 0.5 }} {...props}>
      <UserIcon size={32} />
    </IconButton>
  )
}
