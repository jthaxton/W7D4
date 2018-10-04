import React from 'react';
import ReactDOM from 'react-dom';

export default class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

  render () {
    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}
