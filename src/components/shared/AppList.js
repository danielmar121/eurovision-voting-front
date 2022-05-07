import { Box, Divider, List } from '@material-ui/core';
import AppListItem from './AppListItem';
import PropTypes from 'prop-types';

export default function AppList({ items }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((item, index) => (
        <Box key={index}>
          <AppListItem item={item} />
          <Divider variant="inset" component="li" />
        </Box>
      ))}
    </List>
  );
}

AppList.propTypes = {
  items: PropTypes.array,
};
