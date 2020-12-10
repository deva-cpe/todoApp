import React, {useState} from 'react';
import ListHandlers from './handlers';
import ListItems from './list';
import './todo.css';

const initialState = [{
  id: '0',
  todo: 'one',
  status: true
},{
  id: '1',
  todo: 'two',
  status: false
},{
  id: '2',
  todo: 'three',
  status: false
}];

const TodoApp = () => {
  const [data, setData] = useState(initialState);

  const [todo, setTodo] = useState('')

  const addList = () => {
    setData([...data, {id:`${data.length}`, todo: todo, status: false}]);
    setTodo('');
  }

  const deleteList = (e) => {
    const id = e.target.id
    const dataCopy = [...data];
    dataCopy.splice(id, 1);
    setData(dataCopy);
  }

  return (
    <div className="todo_container">
      <form>
        <input type="text" onChange = {(e) => setTodo(e.target.value)}  value={todo} />
      </form>
      <ListHandlers add={() => addList()} clear={() =>  setTodo('')}/>
      <ListItems data={data} delete={(e) => deleteList(e)} updateData={setData} />
    </div>
  );
};

export default TodoApp;