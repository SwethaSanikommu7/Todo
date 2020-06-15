import React, {useState} from 'react'
import { Grid, TextField, makeStyles, Typography, Button } from '@material-ui/core'
import BackgroundImg from './images/todo8.jpeg'
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    paper: {
        margin: theme.spacing(20, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '70%', 
    },
    image: {
        backgroundColor: theme.palette.common.white,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${BackgroundImg})`,
        backgroundSize: 'cover',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))
export default function Signin() {
    const classes = useStyles();
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    
    const handleSubmit= event => {
        event.preventDefault();
        history.push({pathname:  "/DashBoard"})
    }
    return (
        <Grid container component='main' className={classes.root}>
            <Grid item xs={false} sm={4} md={8} className={classes.image}>

            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                <div className={classes.paper}>
                    <Typography component="h2" variant="h5">
                        Sign in
          </Typography>
                    <form className={classes.form} noValidate onSubmit ={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                           
                        >
                            Sign In
            </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}