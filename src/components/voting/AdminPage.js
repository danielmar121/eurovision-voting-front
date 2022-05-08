import { useQuery } from 'react-query';
import { Box, Container, CircularProgress } from '@material-ui/core';
import { useState } from 'react';
import AppTable from '../shared/AppTable';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { getScores } from '../../utils/routeHandlers';

const columns = [
  { label: 'Country Name', key: 'country' },
  { label: 'Song Name', key: 'song' },
  { label: 'Score', key: 'score' },
];

const isScoresChanged = ({ oldScores, newScores }) =>
  !_.isEqual(oldScores, newScores);

const AdminPage = ({ popUpNotification }) => {
  const [rows, setRows] = useState([
    { countryName: 'Israel', songName: 'I.M', score: 12 },
    { countryName: 'Ukraine', songName: 'Stefania', score: 10 },
    { countryName: 'bla bla bla', songName: 'bla bla bla', score: 8 },
    { countryName: 'sho sho sho', songName: 'sho sho sho', score: 5 },
  ]);

  const { data, isLoading, isSuccess, isError, error } = useQuery(
    'songs',
    getScores,
    { refetchInterval: 1000 }
  );

  if (isSuccess && isScoresChanged({ oldScores: rows, newScores: data })) {
    console.log(data);
    setRows(data);
  }

  if (isError) {
    popUpNotification({
      message: error.message || 'Failed to get songs',
      severity: 'error',
    });
  }

  return (
    <Container>
      <Box
        flexDirection="column"
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {isLoading && <CircularProgress />}
        {isSuccess && <AppTable rows={rows} columns={columns} />}
      </Box>
    </Container>
  );
};

AdminPage.propTypes = {
  popUpNotification: PropTypes.func,
};

export default AdminPage;
