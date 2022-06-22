import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Card, Container } from "react-bootstrap";

const TEAM_DATA = [
  {
    id: 1,
    name: "Barcelona",
  },
  {
    id: 2,
    name: "RM",
  },
  {
    id: 3,
    name: "PSG",
  },
  {
    id: 4,
    name: "Manchester city",
  },
];
function Dnd() {
  const [items, setItems] = useState(TEAM_DATA);

  const dataMap = items.map((el, i) => {
    return (
      <Draggable 
            key={el.id} 
            draggableId={el.id.toString()} 
            index={i}
        >
        {(provided) => {
          return (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Card 
                    style={{ width: "100%", padding: 50, margin: 20, backgroundColor:'#f12341', color:'white' }}>
                {el.name}
              </Card>
            </div>
          );
        }}
      </Draggable>
    );
  });
  const dragOnHandleDragEnd = (res) => {
    const itemsCopy = [...items];
    const [reOrdered] = itemsCopy.splice(res.source.index, 1);
    itemsCopy.splice(res.destination.index, 0, reOrdered);
    setItems(itemsCopy);
  };

  return (
    <div className="App">
      <Container>
        <DragDropContext onDragEnd={dragOnHandleDragEnd}>
          <Droppable droppableId='items'>
            {(provided) => {
              return (
                <div 
                    {...provided.droppableProps} 
                    ref={provided.innerRef}
                    >
                  {dataMap}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
      </Container>
    </div>
  );
}


export default Dnd;