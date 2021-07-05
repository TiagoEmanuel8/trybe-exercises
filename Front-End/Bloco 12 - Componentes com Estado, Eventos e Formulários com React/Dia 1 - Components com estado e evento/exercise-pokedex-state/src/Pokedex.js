import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selectedPokemon: 0 }
        this.nextPokemon = this.nextPokemon.bind(this);
    };

    nextPokemon(selectedPokemon) {
        const pokemonsProps = this.props.pokemons;

        (selectedPokemon < pokemonsProps.length - 1) ?
        this.setState((param) => ({selectedPokemon: param.selectedPokemon + 1})) :
        this.setState({ selectedPokemon: 0 });
    };
    
    render() {
        const pokemonsProps = this.props.pokemons;
        const { selectedPokemon } = this.state;
        return (
            <section>
                <div className="pokedex">
                    {<Pokemon pokemon={pokemonsProps[selectedPokemon]} />}
                </div>
                <button onClick={ () => this.nextPokemon(selectedPokemon) }>Proximo</button>
            </section>
        );
    }
}

export default Pokedex;