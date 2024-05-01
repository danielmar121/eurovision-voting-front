import { Box } from "@material-ui/core";
import { useState } from "react";
import Cookies from "universal-cookie";
import FinalVoting from "./FinalVoting";
import ThankYouForVoting from "./ThankYouForVoting";

const cookies = new Cookies();

const VotingPage = () => {
  const [voted, setVoted] = useState(null);

  if (voted || cookies.get("voted")) {
    return (
      <Box m={0}>
        <ThankYouForVoting />
      </Box>
    );
  } else {
    return (
      <Box m={0}>
        <FinalVoting setVoted={setVoted} />
      </Box>
    );
  }
};

export default VotingPage;
