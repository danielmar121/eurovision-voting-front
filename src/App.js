import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./components/MainPage";
import { Box } from "@material-ui/core";
import { HowToVote, Star } from "@material-ui/icons";
import { useEffect, useState } from "react";

import Drawer from "./components/shared/Drawer";
import AppSnackbar from "./components/shared/AppSnackbar";
import VotingPage from "./components/voting/VotingPage";
import AdminPage from "./components/voting/AdminPage";

const queryClient = new QueryClient();
const pages = [
  {
    label: "Stuzot Voting",
    page: VotingPage,
    key: "voting",
    icon: <HowToVote key="vote-icon" />,
  },
  {
    label: "Admin page",
    page: AdminPage,
    key: "admin",
    icon: <Star key="admin-icon" />,
  },
];

export default function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (page === null) {
      setPage(<VotingPage />);
    }
  }, [page]);

  return (
    <AppSnackbar>
      <QueryClientProvider client={queryClient}>
        <Box>
          <Box>
            <Drawer pages={pages} setPage={setPage} />
          </Box>
          <br />
          <br />
          <br />
          <br />
          <MainPage page={page} />
        </Box>
      </QueryClientProvider>
    </AppSnackbar>
  );
}
