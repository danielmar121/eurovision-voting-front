import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: "auto",
    boxShadow: "none",
    padding: 24,
    borderRadius: 20,
    marginTop: 24,
    backgroundColor: "#00008B",
    align: "center",
  },
}));

export default function AppCard({ children }) {
  const classes = useStyles();

  return <Card className={classes.root}>{children}</Card>;
}

AppCard.propTypes = {
  verified: PropTypes.bool,
  children: PropTypes.any,
};
