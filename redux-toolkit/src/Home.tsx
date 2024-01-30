// import React, { useState, Fragment } from 'react';
// import { BoxStyle, TextFieldStyle, TypographyStyle, ButtonStyle, ListStyle, ListItemStyle, ListItemTextStyle } from './HomeStyle';
// import './index.css';
// let global_id = 0;
// const Home: React.FC = () => {
//     const [todoText, setTodoText] = useState('');
//     const [todoList, setTodoList] = useState<{ id: number; name: string }[]>([]);

//     const handleAddButtonClick = () => {
//         if (todoText.trim() === '') {
//             alert("you must write something");
//             return;
//         }
//         const newItem = { id: global_id, name: todoText };
//         setTodoList([...todoList, newItem]);
//         setTodoText('');
//         global_id = global_id +1;
//         console.log(global_id);
//     };

//     return (
//         <Fragment>
//             <BoxStyle>
//                 <TypographyStyle variant="h2">Todo List</TypographyStyle>

//                 <TextFieldStyle
//                     InputProps={{ style: { fontSize: 30, fontWeight: 'bold', color: 'brown', fontFamily: "cursive" } }}
//                     type="text"
//                     value={todoText}
//                     onChange={(e) => setTodoText(e.target.value)}
//                 />

//                 <ButtonStyle onClick={handleAddButtonClick}>Add</ButtonStyle>

//                 <ListStyle>
//                     <ListItemStyle>
//                         {todoList.map((item) => (
//                             <ListItemTextStyle key={item.id}>{item.name}</ListItemTextStyle>
//                         ))}
//                     </ListItemStyle>
//                 </ListStyle>
//             </BoxStyle>
//         </Fragment>
//     )
// }

// export default Home;

import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BoxStyle, TextFieldStyle, TypographyStyle, ButtonStyle, ListStyle, ListItemStyle, ListItemTextStyle } from './HomeStyle';
import { addTodo } from './Store/Slices/todoSlice'
//import { RootState } from '@reduxjs/toolkit/query';

interface RootState {
  todos: {
    todoList: { id: number; name: string }[];
    nextId: number;
  };
}
const Home: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todoList);


  const handleAddButtonClick = () => {
    if (todoText.trim() === '') {
      alert("you must write something");
      return;
    }
    dispatch(addTodo(todoText.trim()));
    setTodoText('');
  };

  return (
    <Fragment>
      <BoxStyle>
        <TypographyStyle variant="h2">Todo List</TypographyStyle>

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
      </BoxStyle>
    </Fragment>
  );
};

export default Home;
