import { Box, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F9F9F9",
  },
  inputColor: {
    color: "#F22020",
  },
}));

const AppTextField = ({
  value,
  setValue,
  label,
  type = "text",
  multiline = false,
  disabled = false,
  rows = 0,
  width = 300,
  verified = true,
}) => {
  const classes = useStyles();

  return (
    <Box display="flex" aligncontent="center" m={1}>
      <TextField
        className={classes.root}
        style={{ width }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label={label}
        variant="outlined"
        type={type}
        multiline={multiline}
        disabled={disabled}
        rows={rows}
        InputProps={
          !verified && {
            className: classes.inputColor,
          }
        }
      />
    </Box>
  );
};

AppTextField.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  verified: PropTypes.bool,
};

export default AppTextField;
