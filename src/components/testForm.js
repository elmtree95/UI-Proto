import React, { Component , Form} from 'react';
import { TextField, Paper, Typography } from '@material-ui/core';

export default class TestForm extends Component {
  render() {
    return (
        <Paper >        
        <Typography style={{marginBottom:20,marginLeft:10,bold:true}} variant="title" id="tableTitle">
            System Summary
        </Typography>
    </Paper>
    );
  }
};
