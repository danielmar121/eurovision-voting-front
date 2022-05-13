import { Box } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import FinalVoting from './FinalVoting';
import ThankYouForVoting from './ThankYouForVoting';

const cookies = new Cookies();

const VotingPage = ({ popUpNotification }) => {
  const [voted, setVoted] = useState(true);

  if (voted || cookies.get('voted')) {
    return (
      <Box m={0}>
        <ThankYouForVoting popUpNotification={popUpNotification} />
      </Box>
    );
  } else {
    return (
      <Box m={0}>
        <FinalVoting
          popUpNotification={popUpNotification}
          setVoted={setVoted}
        />
      </Box>
    );
  }
};

VotingPage.propTypes = { popUpNotification: PropTypes.func };

export default VotingPage;
