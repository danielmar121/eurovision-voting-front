import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// We can inject some CSS into the DOM.
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #F7DC25 30%, #F9F959 90%)",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(206, 206, 19, .4)",
  },
  label: {
    textTransform: "capitalize",
  },
});

const AppButton = ({ handleSubmit, buttonName }) => {
  const classes = useStyles();

  return (
    <Box display="flex" aligncontent="center" m={1}>
      <Button
        className={classes.root}
        variant="outlined"
        onClick={handleSubmit}
      >
        {buttonName}
      </Button>
    </Box>
  );
};

AppButton.propTypes = {
  handleSubmit: PropTypes.func,
  buttonName: PropTypes.string,
};

export default AppButton;
