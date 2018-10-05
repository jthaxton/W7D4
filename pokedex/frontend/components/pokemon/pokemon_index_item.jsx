import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  <li classname="pokemon-index-item">
    <Link to{`/pokemon/${pokemon.id}`}>
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} alt={pokemon.name} />
      <span>{pokemon.name}</span>
    </Link>
  </li>
}


// import ReactDOM from 'react-dom';
//
// export default class PokemonIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
//
//   render () {
//     return (
//       <section className="pokedex">
//         <ul>
//           {pokemonItems}
//         </ul>
//       </section>
//     );
//   }
// }
