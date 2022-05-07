import { Container, CircularProgress, Box } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import AppList from '../shared/AppList';
import AppButton from '../shared/AppButton';

import { getSongs, sendScores } from '../../utils/routeHandlers';

const FinalVoting = ({ popUpNotification }) => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const [scores, setScores] = useState({});
  const [init, setInit] = useState(true);

  async function getSongsFromServer() {
    try {
      const res = await getSongs();
      popUpNotification({
        message: 'Successfully got songs',
        severity: 'success',
      });
      setSongs(res);
    } catch (error) {
      popUpNotification({ message: error.message, severity: 'error' });
    } finally {
      setLoading(false);
    }
  }

  function validateScore() {
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

  async function handleSubmitScores() {
    setLoading(true);
    try {
      const isValid = validateScore();
      if (isValid) {
        await sendScores({ scores });
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
    } finally {
      setLoading(false);
    }
  }

  async function addFinalScore({ key, score }) {
    const tempScores = scores;
    tempScores[key] = score;
    setScores(tempScores);
    console.log(scores);
  }

  useEffect(() => {
    if (init) {
      getSongsFromServer();
      setInit(false);
    }
  }, [init, getSongsFromServer]);

  return (
    <Container>
      <Box>
        {songs && <AppList items={songs} addFinalScore={addFinalScore} />}
        {loading && <CircularProgress />}
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
};

export default FinalVoting;
