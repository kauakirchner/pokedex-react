import React, { useEffect, useState } from "react";
import { Button, CardText, Container, Card } from "../../styles/components/styles";
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
            {pokemonAbilites && pokemonAbilites.map(pokemon => (
                <Card key={pokemon.url}>
                    <CardText color="#ffff">{pokemon.name}</CardText>
                    <Button onClick={onClick}>{children}</Button>
                </Card>
            ))}
        </Container> 
    )
}

export default MoreInfosPokemon