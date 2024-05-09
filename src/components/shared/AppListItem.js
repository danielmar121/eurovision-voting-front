import * as React from "react";
import {
  Avatar,
  Typography,
  ListItemAvatar,
  ListItemText,
  ListItem,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import { DragHandle } from "@material-ui/icons";
import AppSelect from "./AppSelect";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

export default function AppListItem({ item, addFinalScore, index }) {
  return (
    <Draggable key={item.key} draggableId={item.key} index={index}>
      {(provided) => (
        <ListItem
          alignItems="flex-start"
          innerRef={provided.innerRef}
          {...provided.draggableProps}
        >
          <ListItemIcon {...provided.dragHandleProps}>
            <DragHandle></DragHandle>
          </ListItemIcon>
          <ListItemAvatar>
            <Avatar src={item.flag} />
          </ListItemAvatar>
          <ListItemText
            primary={item.country}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
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
      )}
    </Draggable>
  );
}

AppListItem.propTypes = {
  addFinalScore: PropTypes.func,
  item: PropTypes.object,
  index: PropTypes.number,
};
