// import { makeStyles } from '@mui/styles.';
import {
  TextField,
  Button,
  FormLabel,
  Container,
  Divider,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { Google } from "@mui/icons-material";
// import { createStyles } from "@material-ui/styles";
import { styled } from '@material-ui/styles';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '32px',
});
const useStyles = makeStyles({
    root: {
           display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // padding: theme.spacing(2),
    },
  createBtn: {
    color: "#fff",
    backgroundColor: "#2AA893",
  },

  signUpBtn: {
    width: "100%",
    marginTop: "20px",
    backgroundColor: "#fafafa",
    color: "#505050",
  },
  formControl: {
    marginTop: "20px",
  },
  container: {
      width: "460px"
  }
});

const Signup = () => {

  const[values, setValues] = React.useState({
    showPassword: false});

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
    <Container maxWidth="sm" className={classes.root}>
        <h2>Get started for free</h2>
        {/* <Typography variant="h2">Get started for free</Typography> */}
        <Typography variant="p2" gutterBottom component="div">You 're now one step closer to the awesome future of learning on-the-go
        😎</Typography>
    
      <Button className={classes.signUpBtn}  variant="contained" startIcon={<Google />}>
        <MyButton>Styled Components</MyButton>
        Sign up using Google
      </Button>
      <Divider variant="middle">or</Divider>
      {/* <Box> */}
      <FormControl className={classes.formControl} fullWidth gutterBottom>
        <FormLabel>Email address</FormLabel>
        <TextField id="email" variant="outlined" fullWidth />
      </FormControl>
      

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
      {/* </Box> */}
    </Container>
  );
};

export default Signup;
