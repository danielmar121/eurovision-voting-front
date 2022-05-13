import { Container, Box, CardMedia } from '@material-ui/core';
// import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import AppCard from '../shared/AppCard';

// const imageUrl = 'http://www.dgalim.co.il/ufiles/banners/PRIDE.jpg';
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/1/1f/Gay_flag_7.svg';

const styles = {
  media: {
    height: '150px',
    width: '220px',
  },
};

const ThankYouForVoting = () => {
  return (
    <Container>
      <Box
        flexDirection="column"
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h1>תודה שהצבעת אוחצ׳ינה</h1>
        <AppCard>
          <Box>
            <h1>---------------</h1>
            <CardMedia
              component="img"
              height="194"
              image={imageUrl}
              alt="Paella dish"
              style={styles.media}
            />
            <h1>---------------</h1>
          </Box>
        </AppCard>
        <h1>סתומות זונות</h1>
      </Box>
    </Container>
  );
};

export default ThankYouForVoting;
