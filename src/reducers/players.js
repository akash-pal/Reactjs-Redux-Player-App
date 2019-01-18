import * as actionTypes from '../actions/actionTypes';

const players = (state = [], action) => {

  switch (action.type) {

    case actionTypes.ADD_PLAYER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];

    case actionTypes.REMOVE_PLAYER:

      return state.filter((item, i) => i !== action.id);

    case actionTypes.UPDATE_PLAYER:

      return state.map((item, i) => {

        if (item.id == action.id) {
          return {
            ...item,
            name: action.name
          }
        }
        return item;
      });

    default:
      return state
  }
  
}

export default players