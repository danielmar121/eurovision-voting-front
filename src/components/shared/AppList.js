import { List } from "@material-ui/core";
import AppListItem from "./AppListItem";
import PropTypes from "prop-types";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function AppList({ items: givenItems, addFinalScore }) {
  const [items, setItems] = useState(givenItems);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(reorderedItems);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <List
            innerRef={provided.innerRef}
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            {items.map((item, index) => (
              <AppListItem
                item={item}
                addFinalScore={addFinalScore}
                key={item.key}
                index={index}
              />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
}

AppList.propTypes = {
  addFinalScore: PropTypes.func,
  items: PropTypes.array,
};
