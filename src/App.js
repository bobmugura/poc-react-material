import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormControl, FormHelperText, InputLabel, Input, Grid, Button, Checkbox, FormControlLabel } from '@material-ui/core';

class App extends React.Component {
  state = {
    checkedRememberMe: true,
  };

  handleSubmit = () => {
    this.props.history.push('/search');
  }

  render() {

    return (
        <Grid container justify="center" align="center" direction="column" style={{position: "absolute", top: "30%"}}>
          <Grid item xs={12}>
            <FormControl required="true">
              <InputLabel htmlFor="username-input">Username</InputLabel>
              <Input id="username-input" aria-describedby='username-helper-text' />
              <FormHelperText id='username-helper-text'>Please enter username</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl required="true">
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input id="password-input" aria-describedby='password-helper-text' />
              <FormHelperText id='password-helper-text'>Please enter password</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormControlLabel control={<Checkbox onChange={()=> this.setState({checkedRememberMe: !this.state.checkedRememberMe})} checked={this.state.checkedRememberMe} name="checkedRememberMe" />} label="Remember Me" />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
            </FormControl>
          </Grid>
        </Grid>
    );
  }
}

export default App;
