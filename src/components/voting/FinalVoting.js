import { Container, CircularProgress } from '@material-ui/core';
// import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import AppList from '../shared/AppList';

import { getSongs } from '../../utils/routeHandlers';

const songss = [
  {
    key: 'ISRAEL',
    country: 'Israel',
    song: 'I.M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/2560px-Flag_of_Israel.svg.png',
  },
];

const FinalVoting = ({ popUpNotification }) => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  // const [init, setInit] = useState(true);

  async function getSongsFromServer() {
    try {
      const res = await getSongs();
      popUpNotification({
        message: 'Successfully got songs',
        severity: 'success',
      });
      console.log(res);
    } catch (error) {
      popUpNotification({ message: error.message, severity: 'error' });
    } finally {
      setLoading(false);
      setSongs(songss);
    }
  }

  getSongsFromServer();

  return (
    <Container>
      {songs && <AppList items={songs} />}
      {loading && <CircularProgress />}
    </Container>
  );
};

FinalVoting.propTypes = {
  popUpNotification: PropTypes.func,
};

export default FinalVoting;
