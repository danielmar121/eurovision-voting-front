import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AppSelect = ({ selectKey, addFinalScore }) => {
  const [score, setScore] = useState('');

  const addScoreToFinalScores = ({ value }) => {
    setScore(value);
    addFinalScore({ key: selectKey, score: value });
  };

  return (
    <FormControl fullWidth style={{ minWidth: '100px' }}>
      <InputLabel id="demo-simple-select-label">Score</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={score}
        label="Score"
        onChange={(event) =>
          addScoreToFinalScores({ value: event.target.value })
        }
      >
        <MenuItem value={'0'}>0</MenuItem>
        <MenuItem value={'1'}>1</MenuItem>
        <MenuItem value={'2'}>2</MenuItem>
        <MenuItem value={'3'}>3</MenuItem>
        <MenuItem value={'4'}>4</MenuItem>
        <MenuItem value={'5'}>5</MenuItem>
        <MenuItem value={'6'}>6</MenuItem>
        <MenuItem value={'7'}>7</MenuItem>
        <MenuItem value={'8'}>8</MenuItem>
        <MenuItem value={'10'}>10</MenuItem>
        <MenuItem value={'12'}>DOUZE POINTS</MenuItem>
      </Select>
    </FormControl>
  );
};

AppSelect.propTypes = {
  addFinalScore: PropTypes.func,
  selectKey: PropTypes.string,
};

export default AppSelect;
