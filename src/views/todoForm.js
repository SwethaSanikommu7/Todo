import React from 'react';
import {
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@material-ui/core";
  import Box from "@material-ui/core/Box";
  import Button from "@material-ui/core/Button";
  import Grid from "@material-ui/core/Grid";
  import { makeStyles } from "@material-ui/core/styles";
  import TextField from "@material-ui/core/TextField";
  import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    margin: {
      marginRight: theme.spacing(1),
    },
  }));
const ToDoForm = (props) => {
    const initialToDoState = {
        task_id: null,
        title: "",
        description: "",
        priority: "",
        status: "",
      
      };
    const classes = useStyles();
    const todoState = props.isEditing ? props.todo : initialToDoState;

    const [todo, setTodo] = useState(todoState);
    const [errorFlg, setErrorFlg] = useState(false);

    

    const handleDialogClose = () => {
        setTodo(initialToDoState);
        props.handleDialogClose(false);
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTodo({
          ...todo,
          [name]: value,
        });
      }; 
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.title) {
          setErrorFlg(true);
          return;
        }
        if(errorFlg){
          setErrorFlg(false);
        }
         if (props.isEditing) {
            props.updateTodo(todo);
       
        }
    console.log(props)
        
        setTodo(initialToDoState);
        props.handleDialogClose(false);
      };
    return(
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Title"
            size="small"
            name="title"
            value={todo.title}
            error={errorFlg}
            onChange={handleInputChange}
          />
        </Grid>
          <Grid item xs={12}>
          <TextField
            label="Description"
            type="text"
            variant="outlined"
            name="description"
            value={todo.description}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={5}
          />
        </Grid>
        <Grid item xs={8}>
        <TextField
            fullWidth
            variant="outlined"
            label="Priority"
            size="small"
            name="priority"
            value={todo.priority}
            error={errorFlg}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            fullWidth
            variant="outlined"
            label="Status"
            size="small"
            name="status"
            value={todo.status}
            error={errorFlg}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="row-reverse">
            <Button type="submit" variant="contained" color="primary">
              Update Todo
            </Button>
            <Button
              onClick={handleDialogClose}
              className={classes.margin}
              variant="outlined"
              color="primary"
            >
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
    );

}
export default ToDoForm;