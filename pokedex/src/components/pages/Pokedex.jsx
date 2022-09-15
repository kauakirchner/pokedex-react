import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, Card, CardText, Button } from "../../styles/components/styles";
import MoreInfosPokemon from "../shared/MoreInfosPokemon";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [showMoreInfos, setShowMoreInfos] = useState(false)


    const showInfos = () => {
        setShowMoreInfos(true);
    }

    const closeMoreInfos = () => {
        setShowMoreInfos(false);
    }

    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = async () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=18')
        .then((response) => setPokemons(response.data.results))
        .catch((error) => {
            return error;
        })
    }

    if (pokemons.length < 1) {
        return null;
    }
    return ( 
        <Container>
            {showMoreInfos === false ? (
                pokemons.map(pokemon => (
                    <Card key={pokemon.url} className="card" >
                        <CardText name={pokemon.name}> {pokemon.name} </CardText>
                        <Button onClick={showInfos}>Show More</Button>
                    </Card>
                ))
            ) : (
                <Container>
                    <MoreInfosPokemon>
                        <Button onClick={closeMoreInfos}>Close</Button> 
                    </MoreInfosPokemon>
                </Container>
            )}
        </Container>
    )
}

export default Pokedex