import { Fab, Grid, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),

    ["@media (max-width: 719px)"]: {
      padding: theme.spacing(2),
    },
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

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
