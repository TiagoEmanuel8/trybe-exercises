import React from 'react';
import PokeCard from './PokeCard';

export default class Pokedex extends React.Component {
    render () {
        const { pokemons } = this.props;
        return (
            <section>
                {pokemons.map((pokemon) => (<PokeCard pokemon={ pokemon } />))}
            </section>
        );
    }
}
