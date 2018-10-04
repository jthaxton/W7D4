import React from 'react';
import ReactDOM from 'react-dom';
import requestAllPokemon from '../../actions/pokemon_actions';

export default class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon(this.props.pokemon);
  }

  render () {

    return (
      <div>
        {
          this.props.pokemon.map(poke =>
            <ul>
              <li>{poke.name}</li>
              <img id="picpic" src={poke.image_url}></img>
            </ul>)
      }
      </div>
    );
  }
}
