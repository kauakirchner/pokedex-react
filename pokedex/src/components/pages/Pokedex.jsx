import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../styles/pokedex.css'

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchPokemons, setSearchPokemons] = useState('');
    const pokemonId = pokemons.map(pokemon => {
        return pokemon.id
    })

    useEffect(() => {
        getPokemons();
    }, [])

    useEffect(() => {
        setFilteredPokemons(pokemons.filter((pokemon) => {
            pokemon.name.includes(searchPokemons)
        }))
    },[searchPokemons])

    const getPokemons = async () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=18')
        .then((response) => setPokemons(response.data.results))
        .catch((error) => {
            return error;
        })
    }
    return (
        <div className="container">
            {pokemons.map((pokemon) => (
                    <div className="card">
                        <p name={pokemon.name} className="pokemon-name">
                            {pokemon.name} 
                        </p>
                    </div>
            ))}
        </div>
    )
}

export default Pokedex