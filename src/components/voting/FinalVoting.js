import { useQuery } from 'react-query';
import { Container, CircularProgress, Box } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import AppList from '../shared/AppList';
import AppButton from '../shared/AppButton';
import AppTextField from '../shared/AppTextField';
import { getSongs, sendScores } from '../../utils/routeHandlers';

const cookies = new Cookies();
const minute = 60;
const hour = minute * 60;
const twoHours = hour * 2;

function validateScore({ scores }) {
  const scoresCount = Object.values(scores).reduce(
    (acc, score) => {
      if (score !== '0') acc[score] = acc[score] + 1;
      return acc;
    },
    {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      10: 0,
      12: 0,
    }
  );

  return Object.values(scoresCount).every((scoreCount) => scoreCount === 1);
}

const FinalVoting = ({ popUpNotification, setVoted }) => {
  const [userName, setUserName] = useState('');
  const [scores, setScores] = useState({});
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    'songs',
    getSongs
  );

  async function handleSubmitScores() {
    try {
      const isValid = validateScore({ scores });
      if (isValid) {
        await sendScores({ scores, name: userName });
        cookies.set('voted', true, { path: '/', maxAge: twoHours });
        setVoted(true);
        popUpNotification({
          message: 'Successfully send scores',
          severity: 'success',
        });
      } else {
        popUpNotification({
          message: 'Please make sure the scores are valid',
          severity: 'error',
        });
      }
    } catch (error) {
      popUpNotification({ message: error.message, severity: 'error' });
    }
  }

  async function addFinalScore({ key, score }) {
    const tempScores = scores;
    tempScores[key] = score;
    setScores(tempScores);
  }

  if (isError) {
    popUpNotification({
      message: error.message || 'Failed to get songs',
      severity: 'error',
    });
  }

  return (
    <Container>
      <Box>
        <AppTextField value={userName} setValue={setUserName} label="Name" />
        {isSuccess && <AppList items={data} addFinalScore={addFinalScore} />}
        {isLoading && <CircularProgress />}
        <AppButton
          key="submitScores"
          handleSubmit={handleSubmitScores}
          buttonName="Submit Scores"
        ></AppButton>
      </Box>
    </Container>
  );
};

FinalVoting.propTypes = {
  popUpNotification: PropTypes.func,
  setVoted: PropTypes.func,
};

export default FinalVoting;
