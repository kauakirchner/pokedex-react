import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../styles/pokedex.css'

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchPokemons, setSearchPokemons] = useState('');

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
            console.log(error);
            return error;
        })
    }
    return (
        <div className="container">
            {/* <div className="poke-search">
                <input type="text" value={searchPokemons} onChange={event => setSearchPokemons(event.target.value)}  />
            </div> */}
            {pokemons.map((pokemon) => (
                    <div className="card">
                        <p name={pokemon.name} className="pokemon-name">
                            {pokemon.name}
                        </p>
                    </div>
            ))}

            {/* {searchPokemons.length > 0 ? (
                <div className="card">
                    {filteredPokemons.map(pokemon => {
                        return (
                            <h5 name={pokemon.name} className="pokemon-name"></h5>
                        )
                    })}
                </div>
            ) : (
                <div className="card">
                    {pokemons.map(pokemon => {
                        return (
                            <h5 name={pokemon.name} className="pokemon-name"></h5>
                        )
                    })}
                </div>
            )} */}
        </div>
    )
}

export default Pokedex