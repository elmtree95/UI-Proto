import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function PaperPanel(props) {
  const { classes } = props;
  const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
    },
  });


  

  return (
    <div>
      <Paper className={classes.root} elevation={4}>
   
      <TextField style={{marginTop:50,marginBottom:20, marginLeft:20, marginRight:20}}
        defaultValue="react-bootstrap"
        label="Bootstrap"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
      />
      <TextField style={{marginTop:10, marginRight:20}}
        defaultValue="react-bootstrap"
        label="Bootstrap"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
      />
      <TextField style={{marginTop:10, marginRight:20}}
        defaultValue="react-bootstrap"
        label="Bootstrap"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
      />
      </Paper>
    </div>
  );
}

PaperPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperPanel);