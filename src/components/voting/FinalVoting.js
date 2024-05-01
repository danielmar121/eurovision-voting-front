import { useQuery } from "react-query";
import { Container, CircularProgress, Box } from "@material-ui/core";
import { useState } from "react";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import AppList from "../shared/AppList";
import AppButton from "../shared/AppButton";
import AppTextField from "../shared/AppTextField";
import { getSongs, sendScores } from "../../utils/routeHandlers";
import { enqueueSnackbar } from "notistack";

const cookies = new Cookies();
const minute = 60;
const hour = minute * 60;
const twoHours = hour * 2;

const namesArray = [
  "bitch",
  "butch",
  "sexy",
  "femboy",
  "queer",
  "trade",
  "daddy",
  "queen",
  "faggot",
  "otter",
  "twunk",
  "hunk",
  "puppy",
];

const FinalVoting = ({ setVoted }) => {
  const [userName, setUserName] = useState("");
  const [scores, setScores] = useState({});
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    "songs",
    getSongs
  );

  async function handleSubmitScores() {
    try {
      console.log(scores);
      const {
        is_valid,
        error: { miss, dup },
      } = await sendScores({ scores, name: userName });
      if (is_valid) {
        cookies.set("voted", true, { path: "/", maxAge: twoHours });
        setVoted(true);
        enqueueSnackbar({
          message: "Successfully send scores",
          variant: "success",
        });
      } else {
        if (miss) {
          miss.forEach((number) => {
            const randomName =
              namesArray[Math.floor(Math.random() * namesArray.length)];
            enqueueSnackbar({
              message: `You missed number ${number} ${randomName}`,
              variant: "error",
            });
          });
        }
        if (dup) {
          dup.forEach((number) => {
            const randomName =
              namesArray[Math.floor(Math.random() * namesArray.length)];
            enqueueSnackbar({
              message: `You duplicated number ${number} ${randomName}`,
              variant: "error",
            });
          });
        }
      }
    } catch (error) {
      enqueueSnackbar({
        message: error.message,
        variant: "error",
      });
    }
  }

  async function addFinalScore({ key, score }) {
    const tempScores = scores;
    const number = Number(score);

    if (number) {
      tempScores[key] = Number(score);
    } else {
      delete tempScores[key];
    }

    setScores(tempScores);
  }

  if (isError) {
    enqueueSnackbar({
      message: error.message || "Failed to get songs",
      variant: "error",
    });
  }

  return (
    <Container>
      <Box>
        <AppTextField value={userName} setValue={setUserName} label="Name" />
        {isSuccess && <AppList items={data} addFinalScore={addFinalScore} />}
        {isLoading && <CircularProgress />}
        <AppButton
          key="submitScores"
          handleSubmit={handleSubmitScores}
          buttonName="Submit Scores"
        ></AppButton>
      </Box>
    </Container>
  );
};

FinalVoting.propTypes = {
  setVoted: PropTypes.func,
};

export default FinalVoting;
