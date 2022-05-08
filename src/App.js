import { QueryClient, QueryClientProvider } from 'react-query';
import MainPage from './components/MainPage';
import { Box } from '@material-ui/core';
import { HowToVote, Star } from '@material-ui/icons';
import { useEffect, useState } from 'react';

import Drawer from './components/shared/Drawer';
import AppSnackbar from './components/shared/AppSnackbar';
import FinalVoting from './components/voting/FinalVoting';
import AdminPage from './components/voting/AdminPage';

const queryClient = new QueryClient();
const pages = [
  {
    label: 'Stozot Voting',
    page: FinalVoting,
    key: 'voting',
    icon: <HowToVote key="vote-icon" />,
  },
  {
    label: 'Admin page',
    page: AdminPage,
    key: 'admin',
    icon: <Star key="admin-icon" />,
  },
];

export default function App() {
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const [page, setPage] = useState(null);

  const popUpNotification = ({ message, severity }) => {
    setMessage(message);
    setSeverity(severity);
    setNotify(true);
  };

  useEffect(() => {
    if (page === null) {
      setPage(<FinalVoting popUpNotification={popUpNotification} />);
    }
  }, [page]);

  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <Box>
          <Drawer
            pages={pages}
            setPage={setPage}
            popUpNotification={popUpNotification}
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
    </QueryClientProvider>
  );
}
