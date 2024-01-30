import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ButtonStyle, ListStyle, ListItemStyle, ListItemTextStyle, TextFieldStyle } from './HomeStyle';
import { addTodo } from './Store/Slices/todoSlice'
import { RootState } from './store';

const TodoListComponent: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todoList);

  const handleAddButtonClick = () => {
    if (todoText.trim() === '') {
      alert("you must write something");
      return;
    }
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <Fragment>
        <TextFieldStyle
          InputProps={{ style: { fontSize: 30, fontWeight: 'bold', color: 'brown', fontFamily: "cursive" } }}
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <ButtonStyle onClick={handleAddButtonClick}>Add</ButtonStyle>
        <ListStyle>
          <ListItemStyle>
            {todoList.map((item: { id: number; name: string; }) => (
              <ListItemTextStyle key={item.id}>{item.name}</ListItemTextStyle>
            ))}
          </ListItemStyle>
        </ListStyle>
    </Fragment>
  );
};
export default TodoListComponent;
