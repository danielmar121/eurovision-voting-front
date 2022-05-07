import * as React from 'react';
import {
  Avatar,
  Typography,
  ListItemAvatar,
  ListItemText,
  ListItem,
  Box,
} from '@material-ui/core';
import AppSelect from './AppSelect';
import PropTypes from 'prop-types';

export default function AppListItem({ item }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src={item.flag} />
      </ListItemAvatar>
      <ListItemText
        primary={item.country}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
            >
              {item.song}
            </Typography>
          </React.Fragment>
        }
      />
      <Box>
        <AppSelect availableScore={[1, 2, 3]} />
      </Box>
    </ListItem>
  );
}

AppListItem.propTypes = {
  item: PropTypes.object,
};
