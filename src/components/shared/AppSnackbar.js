import { SnackbarProvider } from "notistack";
import PropTypes from "prop-types";

export default function AppSnackbar({ children }) {
  return (
    <SnackbarProvider
      maxSnack={6}
      autoHideDuration={5000}
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
