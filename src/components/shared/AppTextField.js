import { Box, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#F9F9F9',
  },
}));

const AppTextField = ({
  value,
  setValue,
  label,
  type = 'text',
  width = 300,
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
      />
    </Box>
  );
};

AppTextField.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
};

export default AppTextField;
