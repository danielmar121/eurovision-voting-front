import { useQuery } from 'react-query';
import { Box, Container, CircularProgress } from '@material-ui/core';
import { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import AppTextField from '../shared/AppTextField';
import AppTable from '../shared/AppTable';

import { getScores } from '../../utils/routeHandlers';

const columns = [
  { label: 'Country Name', key: 'country' },
  { label: 'Song Name', key: 'song' },
  { label: 'Score', key: 'score' },
];

const isScoresChanged = ({ oldScores, newScores }) =>
  !_.isEqual(oldScores, newScores);

const AdminPage = ({ popUpNotification }) => {
  const [rows, setRows] = useState([]);
  const [userName, setUserName] = useState('');

  const { data, isLoading, isSuccess, isError, error } = useQuery(
    'songs',
    getScores,
    { refetchInterval: 1000 }
  );

  if (isSuccess && isScoresChanged({ oldScores: rows, newScores: data })) {
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
        <AppTextField value={userName} setValue={setUserName} label="Name" />
        {isLoading && <CircularProgress />}
        {isSuccess && userName === 'stuza' && (
          <AppTable rows={rows} columns={columns} />
        )}
      </Box>
    </Container>
  );
};

AdminPage.propTypes = {
  popUpNotification: PropTypes.func,
};

export default AdminPage;
