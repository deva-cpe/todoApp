import React from 'react';

const ListItems = (props) => {
  let  data = [...props.data];
  const handleCheckBox = (e, id) => {
   data[id].status = e.target.checked
    props.updateData(data);
  }
  return (
    <div className="todo_list">
      <ul>
      {
        props.data.map(list => {
        return (
          <div key={list.id}>
            <input type="checkbox" onChange={(e) => handleCheckBox(e,list.id)} checked={list.status}/>
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