import { Box } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import FinalVoting from './FinalVoting';
import ThankYouForVoting from './ThankYouForVoting';

// import { getCountryDetails } from '../../utils/routeHandlers';

const VotingPage = ({ popUpNotification }) => {
  const [voted] = useState(null);

  if (voted) {
    return (
      <Box m={0}>
        <ThankYouForVoting
          popUpNotification={popUpNotification}
        ></ThankYouForVoting>
      </Box>
    );
  } else {
    return (
      <Box m={0}>
        <FinalVoting popUpNotification={popUpNotification}></FinalVoting>
      </Box>
    );
  }
};

VotingPage.propTypes = { popUpNotification: PropTypes.func };

export default VotingPage;
