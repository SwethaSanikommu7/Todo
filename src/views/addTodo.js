import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";

const AddTodo =(props)=>{
    const initialToDoState = {
      task_id: null,
        title: "",
        description: "",
        priority: "Low",
        status: "New",

    }

    const handleAddClick = () =>{

        if(todo.title !==''){

          props.addTodo(todo);
          setTodo(initialToDoState)
        }
      }

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTodo({
          ...todo,
          [name]: value,
        });
      };

     
    const[todo, setTodo] =useState(initialToDoState);
      return (
        <div>
        <Grid container spacing={2}>
          <Grid item xs={10} md={11}>
            <TextField id="title" name="title" value={todo.title} onChange={handleInputChange} fullWidth placeholder="Add Todo here"></TextField>
          </Grid>
          <Grid item xs={2} md={1}>
            <Button onClick={handleAddClick} variant="contained" fullWidth color="secondary">
              Add
            </Button>
          </Grid>
        </Grid>
      </div>
      );
};
export default AddTodo;