import MainPage from './components/MainPage';
import { Box } from '@material-ui/core';
import { HowToVote } from '@material-ui/icons';
import { useState } from 'react';

import Drawer from './components/shared/Drawer';
import AppSnackbar from './components/shared/AppSnackbar';
import VotingPage from './components/voting/VotingPage';
import FinalVoting from './components/voting/FinalVoting';

const routes = ['Voting'];
const routesIcons = [<HowToVote key="vote-icon" />];
const votingPagesNames = ['vote', 'final'];

export default function App() {
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const [sectionName, setSectionName] = useState('Voting');
  const [pagesNames, setPagesNames] = useState(votingPagesNames);
  const [page, setPage] = useState(null);

  const popUpNotification = ({ message, severity }) => {
    setMessage(message);
    setSeverity(severity);
    setNotify(true);
  };

  const routePages = {
    vote: <VotingPage popUpNotification={popUpNotification} />,
    final: <FinalVoting popUpNotification={popUpNotification} />,
  };

  const openVotingRoutes = () => {
    setSectionName('Voting');
    setPagesNames(votingPagesNames);
  };

  const openPage = ({ name }) => {
    setPage(routePages[name]);
  };

  const openRoutesFuncs = [openVotingRoutes];

  return (
    <Box>
      <Box>
        <Drawer
          routes={routes}
          routesIcons={routesIcons}
          openRoutesFuncs={openRoutesFuncs}
          sectionName={sectionName}
          pagesNames={pagesNames}
          openPage={openPage}
          routePages={routePages}
        />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <MainPage page={page} />
      {notify && (
        <AppSnackbar
          message={message}
          severity={severity}
          setNotify={setNotify}
        />
      )}
    </Box>
  );
}
