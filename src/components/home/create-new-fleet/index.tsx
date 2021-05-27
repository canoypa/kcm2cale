import { Fab, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FC } from "react";
import { useHistory } from "react-router";
import { useStyles } from "./styles";

export const CreateNewFleet: FC = () => {
  const { push } = useHistory();
  const classes = useStyles();

  const linkToFleet = () => push("/new");

  return (
    <Grid container justify="center" className={classes.container}>
      <Fab variant="extended" color="primary" onClick={linkToFleet}>
        <Add className={classes.extendedIcon} />
        編成を作成
      </Fab>
    </Grid>
  );
};
