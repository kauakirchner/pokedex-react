import React, { useEffect, useState } from "react";
import { Button, Card, CardText, Container, MoreInfosCard } from "../../styles/components/styles";
import axios from "axios";

const MoreInfosPokemon = (props) => {
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
            {pokemonAbilites.map(pokemon => (
                <Card key={pokemon.url}>
                    <CardText abilite={pokemon.url}>{pokemon.name}</CardText>
                    <Button onClick={props.onClick}>Close</Button>
                </Card>
            ))}
        </Container> 
    )
}

export default MoreInfosPokemon