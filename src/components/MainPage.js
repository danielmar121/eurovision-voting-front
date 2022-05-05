import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const MainPage = ({ page }) => {
  return (
    <Box id="main_page" display="block" m={0}>
      {page}
    </Box>
  );
};

MainPage.propTypes = {
  page: PropTypes.element,
};

export default MainPage;
