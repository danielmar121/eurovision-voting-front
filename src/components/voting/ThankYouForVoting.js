import { Container, Box, CardMedia } from "@material-ui/core";
// import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import AppCard from "../shared/AppCard";

const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Yellow_ribbon.svg/640px-Yellow_ribbon.svg.png";

const styles = {
  media: {},
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
        fontFamily="Helvetica Neue"
        color="darkblue"
      >
        <h1>ביחד עדן תנצח</h1>
        <AppCard>
          <Box>
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Flag"
              style={styles.media}
            />
          </Box>
        </AppCard>
        <h1>סתומות זונות</h1>
      </Box>
    </Container>
  );
};

export default ThankYouForVoting;
