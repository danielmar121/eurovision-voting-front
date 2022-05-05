import { Box, Container, CircularProgress, CardMedia } from '@material-ui/core';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useState } from 'react';
import PropTypes from 'prop-types';

import AppSelect from '../shared/AppSelect';
import AppButton from '../shared/AppButton';
import AppCard from '../shared/AppCard';

// import { submitScore } from '../../utils/routeHandlers';

const CountryVote = ({
  countryName,
  songName,
  imageUrl,
  popUpNotification,
  setVotingStatus,
}) => {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState('1');
  const mediaStyles = useWideCardMediaStyles();

  async function handleSubmitScore(event) {
    event.preventDefault();
    setLoading(true);
    try {
      // const res = await submitScore({
      //   score,
      // });
      popUpNotification({
        message: 'Successfully submit score',
        severity: 'success',
      });
      setVotingStatus('wait');
    } catch (error) {
      popUpNotification({ message: error.message, severity: 'error' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <AppCard>
        <Box>
          <CardMedia classes={mediaStyles} image={imageUrl} />
          <h1>{countryName}</h1>
          <h3>{songName}</h3>
          <Box display="flex" aligncontent="center" m={1}>
            <AppSelect score={score} setScore={setScore} />
          </Box>
        </Box>
        <Box display="flex" aligncontent="center" m={1}>
          <AppButton handleSubmit={handleSubmitScore} buttonName="Submit" />
          {loading && <CircularProgress />}
        </Box>
      </AppCard>
    </Container>
  );
};

CountryVote.propTypes = {
  countryName: PropTypes.string,
  songName: PropTypes.string,
  imageUrl: PropTypes.string,
  popUpNotification: PropTypes.func,
  setVotingStatus: PropTypes.func,
};

export default CountryVote;
