import React from 'react';

const ListHandlers = (props) => {
  return (
    <div className="todo_handlers">
      <button onClick={props.add}>Add</button>
      <button onClick={props.clear}>Clear</button>
    </div>
  );
};

export default ListHandlers;