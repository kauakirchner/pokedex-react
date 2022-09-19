import React, { useEffect, useState } from "react";
import { CardText, Container } from "../../styles/components/styles";
import axios from "axios";

const MoreInfosPokemon = ({ onClick, children }) => {
    const [pokemonAbilites, setPokemonAbilites] = useState([]);
    const [pokemonEvolution, setPokemonEvolution] = useState([]);

    useEffect(() => {
        getPokemonAbilities();
        getPokemonEvolutions();
    }, [])

    const getPokemonAbilities = async () => {
        axios.get('https://pokeapi.co/api/v2/ability?limit=18')
        .then(response => setPokemonAbilites(response.data.results))
        .catch(error => {
            return error.data
        })
    }

    const getPokemonEvolutions = async () => {
        axios.get('https://pokeapi.co/api/v2/evolution-chain?limit=18')
        .then(response => setPokemonEvolution(response.data.results))
    }

    return (
        <Container>
            <ul>
            {pokemonAbilites && pokemonAbilites.map(pokemon => (
                <li key={pokemon.url}>
                    <CardText color="#000">{pokemon.name}</CardText>
                    <span onClick={onClick}>{children}</span>
                </li>
            ))}
            </ul>
        </Container> 
    )
}

export default MoreInfosPokemon