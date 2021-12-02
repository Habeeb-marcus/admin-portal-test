// import { makeStyles } from '@mui/styles.';
import { TextField, Button, FormLabel, Container, Divider,  FormControl, IconButton, OutlinedInput, Typography, Grid } from "@mui/material";
import { Box, createTheme, typography } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import React from "react";
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    createBtn: {
        color: "white",
        backgroundColor: "#2AA893",
    },

    signUpBtn: {
        // display: "block",
        width: "100%",
        marginTop: theme.spacing(4),
        backgroundColor: "#FAFAFA",
        color: "#505050",
    },

    formControl: {
        marginTop: "20px"
    }

}))


  



  

const Login = () => {
  
       const [values, setValues] = React.useState({
    showPassword: false,
});
 const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();
  return (
      <Grid container>
      <Grid item>
    <Container maxWidth="sm">
      <h2>Log in to your mApp Account </h2>{" "}
      <typography variant="p">
       Welcome back to continue enjoying the amazing learning experience in mEd 🙌🏼
      </typography>

      
      <Button className={classes.signUpBtn} variant="contained" startIcon gutterBottom>
        Sign up using Google
      </Button>
      <Divider variant="middle">or</Divider>
    <Box>
      <FormControl className={classes.formControl} fullWidth gutterBottom>
          <FormLabel>Email address</FormLabel>
        <TextField 
        id="email" 
        variant="filled" 
        fullWidth
        />
      </FormControl >

      <FormControl className={classes.formControl} variant="outlined" fullWidth >
            <FormLabel>Password</FormLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>



      <Button className={classes.createBtn} variant="contained" fullWidth> Create mApp account </Button>

      <Typography variant="p"> Forgot password? <a href="/">Tap to reset</a></Typography>
      </Box>
    </Container>
    </Grid>
    </Grid>
  );
};

export default Login;
