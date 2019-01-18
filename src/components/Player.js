import React from "react";
import PropTypes from "prop-types";

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    itemConatiner : {
        padding: '16px'
    }
});


class Player extends React.Component {

    render() {

        const { classes } = this.props;

        if (this.props.name) {
            return (

                <ListItem alignItems="flex-start">

                    <ListItemText
                        className={classes.itemConatiner}
                        primary={
                            <Typography variant="inherit" noWrap color="textPrimary">
                                {this.props.name}
                            </Typography>
                        }
                    />

                    <IconButton onClick={() => this.props.deletePlayer(this.props.index)} aria-label="Delete" className={classes.margin}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton onClick={() => this.props.updatePlayer(this.props.index)} aria-label="Delete" className={classes.margin}>
                        <EditIcon />
                    </IconButton>

                </ListItem>

            );
        } else {
            return null;
        }

    }

}

export default withStyles(styles)(Player);