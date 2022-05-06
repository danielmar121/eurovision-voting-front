import { Box, Container, CircularProgress } from '@material-ui/core';
import { useState } from 'react';
import AppTable from '../shared/AppTable';
// import { getGetScore } from '../../utils/routeHandlers';

const columns = [
  { label: 'Country Name', key: 'countryName' },
  { label: 'Song Name', key: 'songName' },
  { label: 'Score', key: 'score' },
];

const WaitForVoting = () => {
  const [rows, setRows] = useState([
    { countryName: 'Israel', songName: 'I.M', score: 12 },
    { countryName: 'Ukraine', songName: 'Stefania', score: 10 },
    { countryName: 'bla bla bla', songName: 'bla bla bla', score: 8 },
    { countryName: 'sho sho sho', songName: 'sho sho sho', score: 5 },
  ]);

  setTimeout(() => {
    setRows([
      { countryName: 'Israel', songName: 'I.M', score: 12 },
      { countryName: 'Ukraine', songName: 'Stefania', score: 11 },
      { countryName: 'bla bla bla', songName: 'bla bla bla', score: 8 },
      { countryName: 'sho sho sho', songName: 'sho sho sho', score: 5 },
      { countryName: 'la la la', songName: 'la la la', score: 3 },
    ]);
  }, 2000);

  return (
    <Container>
      <Box
        flexDirection="column"
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AppTable rows={rows} columns={columns} />
        <h1>Please wait for the next voting session</h1>
        <CircularProgress size="10rem" />
      </Box>
    </Container>
  );
};

export default WaitForVoting;
