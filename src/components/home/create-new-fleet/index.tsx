import { Fab, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";
import { useStyles } from "./styles";

export const CreateNewFleet: FC = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Link href="/new" passHref>
        <Fab variant="extended" color="primary">
          <Add className={classes.extendedIcon} />
          編成を作成
        </Fab>
      </Link>
    </Grid>
  );
};
