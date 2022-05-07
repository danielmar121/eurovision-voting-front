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

export default function AppListItem({ item, addFinalScore }) {
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
        <AppSelect selectKey={item.key} addFinalScore={addFinalScore} />
      </Box>
    </ListItem>
  );
}

AppListItem.propTypes = {
  addFinalScore: PropTypes.func,
  item: PropTypes.object,
};
