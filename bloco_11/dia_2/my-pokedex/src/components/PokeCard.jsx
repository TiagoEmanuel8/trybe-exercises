import React from 'react';


export default class PokeCard extends React.Component {

    render () {
        const {pokemon: { id, name, type, averageWeight, image, moreInfo }} = this.props;

        return (
            <section className="cards">
                <p> id: {id} </p>
                <p>name: {name} </p>
                <p>type: {type} </p>
                <p>averageWeight: {averageWeight.value}</p>
                <p>averageWeight: {averageWeight.measurementUnit}</p>
                <img src={image} alt={`${name} picture of pokemon`}/>
            </section>

        );
    }
}