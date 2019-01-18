import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'

import { addPlayer } from '../actions/index';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing.unit
    },
    textField: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class AddPlayer extends React.Component {

    nameRef = React.createRef();

    createPlayer = event => {

        event.preventDefault();

        let playerName = this.nameRef.current.value;

        this.props.dispatch(addPlayer(playerName))

        event.currentTarget.reset();

        this.goBack();
    }

    goBack(){
        console.log('goBack');
        this.props.history.goBack();
    }

    render() {

        const { classes } = this.props;

        return (

            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton onClick={() => this.goBack()} color="inherit" aria-label="Back">
                            <BackIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Add Player
                        </Typography>
                    </Toolbar>
                </AppBar>

                <form onSubmit={this.createPlayer} className={classes.container}>

                    <Input className={classes.textField} fullWidth name="name" inputRef={this.nameRef} type="text" placeholder="Name" />
                    <Button fullWidth type="submit" variant="contained" color="primary" className={classes.button}>
                        Add Player
                    </Button>

                </form>

            </div>

        )
    }
}

export default withStyles(styles)(connect()(AddPlayer))