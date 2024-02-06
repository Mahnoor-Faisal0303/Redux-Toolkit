import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonStyle, ListStyle, ListItemStyle, ListItemTextStyle, TextFieldStyle, DeleteEditButtonStyle } from './HomeStyle';
import { addTodo, deleteTodo } from './Store/Slices/todoSlice'
import { RootState } from './store';
import { Alert, Box } from '@mui/material';

const TodoListComponent: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todoList);

  const handleAddButtonClick = () => {
    if (todoText.trim() === '') {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  const handleDeleteButtonClick = (id: string) => {
    dispatch(deleteTodo(id));
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
          {todoList.map((item: { id: string; name: string; }) => (
            <Box key={item.id}>
              <ListItemTextStyle key={item.id}>{item.name}
                <DeleteEditButtonStyle onClick={() => handleDeleteButtonClick(item.id)}>Delete</DeleteEditButtonStyle>
              </ListItemTextStyle>
            </Box>
          ))}
        </ListItemStyle>
      </ListStyle>

      {showAlert && (
        <Alert variant="filled" severity="info">
          Please write something!
        </Alert>
      )}
    </Fragment>
  );
};
export default TodoListComponent;
