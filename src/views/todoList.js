import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from "@material-ui/icons/Edit";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
    // icon: {
    //   marginRight: theme.spacing(2),
    // },
  });

const TodoList = (props) => {
  const classes = useStyles();
  const items = props.todos;
  return(
    <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
             <TableHead>
               <TableRow>
                 <TableCell>Title</TableCell>
                 <TableCell align="right">Priority</TableCell>
                 <TableCell align="right">Status</TableCell>
                 <TableCell align="right">Actions</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
             {items.map((row,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {row.title} 
              </TableCell>
              <TableCell align="right">{row.priority}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <IconButton
                      size="small"
                      className={classes.icon}
                      onClick={() => props.editTodo(row)}
                    >
                      <EditIcon /></IconButton>
                      <IconButton
                      size="small"
                      onClick={() => props.deleteTodo(row.task_id)}
                    >
                      <DeleteIcon style={{ color: "#d11a2a" }} />
                    </IconButton>
              </TableCell>
            </TableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>
  );
}
export default TodoList