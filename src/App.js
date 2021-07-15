import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

function App() {
  const [pokemonData, setPokemonData] = useState([])

  function generateRange() {
    let range = [];
    for (let i = 1; i < 152; i++) {
      range.push(i);
    }
    return range;
  }

  useEffect(() => {
    generateRange().forEach(num => {
      console.log(num)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then(res => {
          pokemonData.push(res.data)
          
        })
        .catch(err => {
          console.log(err)
        })
    }) 
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon API</h1>
        <h2>Gotta catch em all</h2>
      </header>
      {pokemonData.map(pokemon => {
        return <PokemonCard pokemon={pokemon}/>
      })}
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
