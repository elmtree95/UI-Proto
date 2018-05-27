import React, { Component , Form} from 'react';
import { TextField, Paper, Typography } from '@material-ui/core';


export default class TestForm extends Component {
  render() {
    return (
        <Paper style={{flex: 1}}>  

          <TextField style={{marginRight:10, marginLeft:10}}
          id="name"
          label="Name"
          // onChange={this.handleChange('name')}
          margin="normal"
        />   
        <TextField
          id="name"
          label="Name"
          // onChange={this.handleChange('name')}
          margin="normal"
        />     
       
    </Paper>
    );
  }
};
