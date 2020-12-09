import React from 'react';

const ListItems = (props) => {
  return (
    <div className="todo_list">
      <ul>
      {
        props.data.map(list => {
        return (
          <div key={list.id}>
          <input type="checkbox" />
          <li style={{display:"inline-flex"}}>{list.todo}</li>
          <button id= {list.id} onClick={props.delete}>x</button>
          </div>
        );
        })
      }
      </ul>
    </div>
  );
};

export default ListItems;