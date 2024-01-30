import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ButtonStyle, ListStyle, ListItemStyle, ListItemTextStyle, TextFieldStyle } from './HomeStyle';
import { addTodo , deleteTodo , editTodo } from './Store/Slices/todoSlice'
import { RootState } from './store';
import { Box, Button } from '@mui/material';

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

  const handleDeleteButtonClick = (id: number) =>{
    dispatch(deleteTodo(id));
};
const handleEditButtonClick = (id: number) =>{
     
}

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
                 <Box>
                 <ListItemTextStyle key={item.id}>{item.name}
                 <Button onClick={() => handleDeleteButtonClick(item.id)}>Delete</Button>
                 <Button onClick={() => handleEditButtonClick(item.id)}>Edit</Button></ListItemTextStyle>
               </Box>
            ))}
          </ListItemStyle>
        </ListStyle>
    </Fragment>
  );
};
export default TodoListComponent;
