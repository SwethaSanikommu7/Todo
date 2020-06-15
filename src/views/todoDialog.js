import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import React from 'react'
import ToDoForm from './todoForm'


const TodoDialog = (props) => {
    console.log(props);
    return (
        <Dialog open={props.open}>
            <DialogTitle>Edit Your Todo</DialogTitle>
            <DialogContent>
                <ToDoForm 
                todo={props.todo} isEditing={props.isEditing} updateTodo={props.updateTodo} handleDialogClose={props.handleDialogClose}/>
            </DialogContent>
        </Dialog>
    )
} 


export default TodoDialog