
/* import React, { Component } from 'react';


export default class About extends Component {
  render() {
    return (
     <div>
        <h1>About</h1>
     </div>
    );
  }
} */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class About extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>About KeySecure</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"SafeNet Assured Technologies"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
             SafeNet Assured Technologies KeySecure 8.9 <br/><br/><br/><br/>

             All Rights Reserved SafeNet Assured Technologies 2018.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

About.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(About);