import React from "react";
import PropTypes from "prop-types";

import { updatePlayer } from '../actions/index';
import { connect } from 'react-redux'

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

function mapStateToProps(state) {
    return {
        players: state.players
    }
}

class EditPlayer extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            id: '',
            name: ''
        };
    }

    componentDidMount() {

        const { params } = this.props.match;

        const selectedId = params.id;

        this.setState({ id: selectedId });

        const player = this.props.players.find(i => i.id == selectedId);

        this.setState({ name: player.name });
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {

        event.preventDefault();

        this.props.dispatch(updatePlayer(this.state.id, this.state.name));

        this.goBack();

    }

    goBack() {
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
                            Edit Player
                        </Typography>
                    </Toolbar>
                </AppBar>

                <form onSubmit={this.handleSubmit} className={classes.container}>

                    <Input className={classes.textField} fullWidth name="name" value={this.state.name} onChange={this.handleChange} />
                    <Button fullWidth type="submit" variant="contained" color="primary" className={classes.button}>
                        Update Player
                    </Button>

                </form>

            </div>


        )
    }
}

export default withStyles(styles)(connect(mapStateToProps)(EditPlayer));