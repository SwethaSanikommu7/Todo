import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Paper, Button, Grid, Card ,Box} from '@material-ui/core';
import TodoList from './todoList';
import TodoService from '../api/todoService';
import AddTodo from './addTodo';
import ToDoList from './todoList';
import TodoDialog from './todoDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
 
 todo: {
   marginTop:'150px',
   width: '1000px',
   marginLeft: '5%',
   width: "90%",
 }
}));

function Todo() {
  const classes = useStyles();
  const [todos , setTodos] = useState([]);
  const [isOpen, setisopen] = useState(false);
  const [currentTodo,setCurrentTodo] = useState();
  const [isOpenDlg, setisOpenDlg] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    TodoService.get(`/getTodo`)
      .then((res) => {
        if (res.status === 200) {
          setTodos(res.data);
        }
      })
      .catch((err) => {
       console.log(err);
      });
  }, []);

  const addTodo = (todo) => {
    TodoService.post("/addTodo", { ...todo })
      .then((res) => {
        if (res.status === 200) {
          setTodos([...todos, res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    };

    const editTodo = (todo) => {
      setEditing(true);
      setisOpenDlg(true);
      setCurrentTodo({ ...todo });
    };

    const updateTodo = (updatedTodo) => {
      setEditing(false);
      TodoService.post("/updateTodo", { ...updatedTodo })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data)
            setTodos(
              todos.map((todo) =>
                todo.task_id === updatedTodo.task_id ? updatedTodo : todo
              )
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const deleteTodo = (_id) => {
      TodoService.get(`/deleteTodo/${ _id }`)
        .then((res) => {
          if (res.status === 200) {
            setTodos(todos.filter((todo) => todo.task_id !== _id));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const handleDialogClose = () => {
      setEditing(false);
      setisOpenDlg(false);
    };

        return(
          <Card className={classes.todo}>
            <Box disply ="flex" justifyContent="center">
        
             <TodoDialog
          open={isOpenDlg}
          isEditing={editing}
          handleDialogClose={handleDialogClose}
          todo={currentTodo}
          updateTodo={updateTodo}
        />
         <AddTodo addTodo ={addTodo } />  
            <ToDoList todos ={todos}  editTodo={editTodo} deleteTodo={deleteTodo}/>
         
        
            </Box>
         </Card>

        )
}
export default Todo;