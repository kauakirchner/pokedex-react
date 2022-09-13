import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, Card, CardText,MoreInfosCard, Button } from "../../styles/components/styles";
import '../../styles/pokedex.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    let [showMoreInfos, setShowMoreInfos] = useState(false)


    const showInfos = () => {
        setShowMoreInfos(true);
        console.log(showMoreInfos);
    }

    const closeMoreInfos = () => {
        setShowMoreInfos(false);
        console.log(showMoreInfos);
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
            {pokemons.map(pokemon => (
                <Card key={pokemon.url} className="card" >
                    <CardText name={pokemon.name}> {pokemon.name} </CardText>
                    <Button onClick={showInfos}>Show More</Button>
                </Card>
            ))}
            {showMoreInfos && (
                <MoreInfosCard>
                    <CardText onClick={closeMoreInfos}>
                        More infos
                    </CardText>
                </MoreInfosCard>
            )}
        </Container>
    )
}

export default Pokedex