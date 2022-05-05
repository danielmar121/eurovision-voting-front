import { Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CountryVote from './CountryVote';
import WaitForVoting from './WaitForVoting';

// import { getCountryDetails } from '../../utils/routeHandlers';

const votingStatuses = { WAIT: 'wait', VOTE: 'vote', DONE: 'done' };

const VotingPage = ({ popUpNotification }) => {
  const [votingStatus, setVotingStatus] = useState('wait');
  const [page, setPage] = useState(null);

  useEffect(() => {
    console.log(votingStatus);
    switch (votingStatus) {
      case votingStatuses.VOTE:
        // const { countryName, songName, imageUrl } = getCountryDetails();
        setPage(
          <CountryVote
            countryName="Israel"
            songName="I.M"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/2560px-Flag_of_Israel.svg.png"
            popUpNotification={popUpNotification}
            setVotingStatus={setVotingStatus}
          />
        );
        break;
      case votingStatuses.DONE:
        setPage(<h1>done</h1>);
        break;
      case votingStatuses.WAIT:
        setTimeout(() => {
          setVotingStatus('vote');
        }, 5000);
        setPage(<WaitForVoting />);
        break;
      default:
        popUpNotification({
          message: `Wrong status (${votingStatus})`,
          severity: 'error',
        });
        break;
    }
  }, [votingStatus, popUpNotification]);

  return <Box m={0}>{page}</Box>;
};

VotingPage.propTypes = { popUpNotification: PropTypes.func };

export default VotingPage;
