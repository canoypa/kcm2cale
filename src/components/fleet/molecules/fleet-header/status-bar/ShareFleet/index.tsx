import { ShareOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { FC, useCallback, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { ShareDialog } from '~/components/common/ShareDialog'
import { LocalFleetDataV1 } from '~/core/persistence/types'
import { FleetState } from '~/store/organize/info'

type Props = {
  fleet: LocalFleetDataV1
}
const FleetShareButton_: FC<Props> = ({ fleet }) => {
  const [isOpenShareDialog, setOpenShareDialog] = useState(false)

  const title = fleet.title || '無題の編成'
  const url = `https://kcm2cale.web.app/fleet/${fleet.id}`

  const shareFleet = useCallback(() => {
    if (window.navigator.share) {
      window.navigator.share({ title, url })
    } else {
      setOpenShareDialog(true)
    }
  }, [title, url])

  const onCloseShareDialog = useCallback(() => {
    setOpenShareDialog(false)
  }, [])

  return (
    <>
      <Tooltip title="編成を共有">
        <IconButton onClick={shareFleet} aria-label="編成を共有">
          <ShareOutlined />
        </IconButton>
      </Tooltip>

      <ShareDialog
        open={isOpenShareDialog}
        onClose={onCloseShareDialog}
        title="編成を共有"
        url={url}
      />
    </>
  )
}

export const FleetShareButton: FC = () => {
  const fleet = useRecoilValue(FleetState)

  if (!fleet) return null
  return <FleetShareButton_ fleet={fleet} />
}
