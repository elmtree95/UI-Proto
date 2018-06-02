import React, { Component , Form} from 'react';
import { TextField, Paper, Typography } from '@material-ui/core';

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
        // <Paper style={{flex: 1}}>  

        <div className="step step1">
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
     
  {/* </Paper> */}
  </div>
    )
  }
}