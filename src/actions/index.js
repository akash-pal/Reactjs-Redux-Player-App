
import * as actionTypes from './actionTypes';

let nextPlayerId = 0;

export const addPlayer = name => {

    return {
        type: actionTypes.ADD_PLAYER,
        id: nextPlayerId++,
        name
    }
}


export const removePlayer = (id) => {

    return {
        type: actionTypes.REMOVE_PLAYER,
        id: id
    }

}

export const updatePlayer = (id, name) => {

    return {
        type: actionTypes.UPDATE_PLAYER,
        id: id,
        name: name
    }

}

