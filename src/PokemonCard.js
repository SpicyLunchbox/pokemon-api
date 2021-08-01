import React from 'react';

export default function PokemonCard({pokemon}) {
    // let imgSrc = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png` website is currently down
    let imgSrc = pokemon.sprites.front_default

    return (
        <div className="PokeCard">
            <div className="ImgBx">
                <img src={imgSrc} alt="pokemon illustration"></img>
            </div>
            <div className="CardContent">
                <h3>{pokemon.name}</h3>
                <br/>
                <h5>Types</h5>
                {pokemon.types.map(type => {
                    return <p>{type.type.name}</p>
                })}
                <br/>
                <h5>Stats</h5>
                {pokemon.stats.map(stat => {
                    return <p>{stat.stat.name}: {stat.base_stat}</p>
                })}
            </div>
        </div>
    )    
}