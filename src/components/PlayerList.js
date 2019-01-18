import React from "react";

import Player from './Player';

import { connect } from 'react-redux';

import List from '@material-ui/core/List';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    noResult: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: theme.spacing.unit,
        margin: theme.spacing.unit
    }
});

class PlayerList extends React.Component {

    render() {

        const { classes } = this.props;

        if (this.props.players.length > 0) {
            return (
                <List>

                    {
                        (this.props.players).map(item => (
                            <Player
                                key={item.id}
                                index={item.id}
                                deletePlayer={this.props.deletePlayer}
                                updatePlayer={this.props.updatePlayer}
                                name={item.name}
                            />
                        ))

                    }

                </List>
            );
        } else {
            return (<div className={classes.noResult}>No Players available</div>);
        }


    }

}

export default withStyles(styles)(connect()(PlayerList));