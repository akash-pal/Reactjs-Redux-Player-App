import React from 'react';
import './App.css';
import PlayerList from "./PlayerList";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function mapStateToProps(state) {
  return {
    players: state.players
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }

});

class App extends React.Component {


  updatePlayer = index => {
    this.props.history.push(`/edit-player/${index}`);
  }

  deletePlayer = index => {
    this.props.removePlayer(index);
  }

  add = () => {
    this.props.history.push(`/add`);
  }

  render() {

    const { classes } = this.props;

    return (
      <div>

        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Players
          </Typography>
          </Toolbar>
        </AppBar>

        <PlayerList {...this.props} players={this.props.players} deletePlayer={this.deletePlayer} updatePlayer={this.updatePlayer} />

        <Fab onClick={() => this.add()} className={classes.fab} color="primary" aria-label="Add">
          <AddIcon />
        </Fab>

      </div>
    );

  }
}

const Main = connect(mapStateToProps, mapDispachToProps)(App);

export default withStyles(styles)(Main);

