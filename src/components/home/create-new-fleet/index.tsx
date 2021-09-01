import { Fab, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";

export const CreateNewFleet: FC = () => {
  return (
    <Grid container justifyContent="center" padding={{ xs: 2, sm: 3 }}>
      <Link href="/new" passHref>
        <Fab variant="extended" color="primary">
          <Add sx={{ mr: 1 }} />
          編成を作成
        </Fab>
      </Link>
    </Grid>
  );
};
