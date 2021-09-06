import { ShareOutlined } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { FC, useCallback, useContext, useState } from "react";
import { ShareDialog } from "~/components/common/ShareDialog";
import { FleetIdContext } from "~/components/fleet/fleetIdContext";
import { useFleet } from "~/components/fleet/hooks";
import { Fleet } from "~/models/fleet";

type Props = {
  fleet: Fleet;
};
const _FleetShareButton: FC<Props> = ({ fleet }) => {
  const [isOpenShareDialog, setOpenShareDialog] = useState(false);

  const title = fleet.title || "無題の編成";
  const url = `https://kcm2cale.web.app/fleet/${fleet.id}`;

  const shareFleet = useCallback(() => {
    if (window.navigator.share) {
      window.navigator.share({ title, url });
    } else {
      setOpenShareDialog(true);
    }
  }, [title, url]);

  const onCloseShareDialog = useCallback(() => {
    setOpenShareDialog(false);
  }, []);

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
  );
};

export const FleetShareButton: FC = () => {
  const fleetId = useContext(FleetIdContext);
  const { data: fleet } = useFleet(fleetId);

  if (!fleet) return null;
  return <_FleetShareButton fleet={fleet} />;
};
