import merge from 'lodash/merge';
import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
