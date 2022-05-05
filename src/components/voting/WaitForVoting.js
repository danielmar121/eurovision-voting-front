import { Box, Container, CircularProgress } from '@material-ui/core';

const WaitForVoting = () => {
  return (
    <Container>
      <Box m={1}>
        <h1>Please wait for the next voting session</h1>
      </Box>
      <Box m={1}>
        <CircularProgress size="10rem" />
      </Box>
    </Container>
  );
};

export default WaitForVoting;
