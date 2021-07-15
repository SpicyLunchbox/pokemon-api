import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [pokemonData] = useState([]);

  function generateRange() {
    let range = [];
    for (let i = 1; i < 152; i++) {
      range.push(i);
    }
    return range;
  }

  useEffect(() => {
    generateRange().forEach(num => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then(res => {
          pokemonData.push(res.data);
          if (num === 151) {
            pokemonData.sort(function(a,b){
              return a.id - b.id;
            })
            setLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>
  } else {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon API</h1>
        <h2>Gotta catch em all!</h2>
      </header>
      <section className="PokeCard-container">
      {pokemonData.map(pokemon => {
        return <PokemonCard pokemon={pokemon}/>
      })}
      </section>
      <footer className="App-footer"> 
      </footer>
    </div>
  )};
}

export default App;
