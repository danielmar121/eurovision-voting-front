import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const AppSelect = ({ score, setScore }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Score</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={score}
        label="Score"
        onChange={(event) => setScore(event.target.value)}
      >
        <MenuItem value={'1'}>1</MenuItem>
        <MenuItem value={'2'}>2</MenuItem>
        <MenuItem value={'3'}>3</MenuItem>
        <MenuItem value={'4'}>4</MenuItem>
        <MenuItem value={'5'}>5</MenuItem>
        <MenuItem value={'6'}>6</MenuItem>
        <MenuItem value={'7'}>7</MenuItem>
        <MenuItem value={'8'}>8</MenuItem>
        <MenuItem value={'10'}>10</MenuItem>
        <MenuItem value={'12'}>DOUZE PUA</MenuItem>
      </Select>
    </FormControl>
  );
};

AppSelect.propTypes = {
  setScore: PropTypes.func,
  score: PropTypes.string,
};

export default AppSelect;
