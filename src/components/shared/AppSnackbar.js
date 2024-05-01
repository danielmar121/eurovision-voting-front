import { makeStyles } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AppSnackbar({ children }) {
  const classes = useStyles();

  return (
    <SnackbarProvider
      className={classes.root}
      maxSnack={6}
      autoHideDuration={4000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}

AppSnackbar.propTypes = {
  children: PropTypes.any,
};
