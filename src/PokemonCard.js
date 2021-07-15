import React from 'react';

export default function PokemonCard({pokemon}) {
    let imgSrc = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`

    return (
        <div className="PokeCard">
            <div className="ImgBx">
                <img src={imgSrc} alt="pokemon illustration"></img>
            </div>
            <div className="CardContent">
                <h3>{pokemon.name}</h3>
                <h5>Types</h5>
                {pokemon.types.map(type => {
                    return <p>{type.type.name}</p>
                })}
                <h5>Stats</h5>
                {pokemon.stats.map(stat => {
                    return <p>{stat.stat.name}: {stat.base_stat}</p>
                })}
            </div>
        </div>
    )    
}