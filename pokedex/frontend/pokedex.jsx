import React from 'react';
import ReactDOM from 'react-dom';
import RECEIVE_ALL_POKEMON from './actions/pokemon_actions';
import fetchAllPokemon from './util/api_util';
import {receiveAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import {requestAllPokemon} from './actions/pokemon_actions';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
});
