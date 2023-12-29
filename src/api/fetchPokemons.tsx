import { Pokemon } from "../types/types";
import {formatPokemonName} from "../utils/utils";

export async function fetchPokemons(): Promise<Array<Pokemon>> {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    if (!response.ok) throw new Error('Something went wrong');

    const data = await response.json();
    const pokemons = data.results.map((pokemon: any) => ({
        id: pokemon.national_number,
        name: pokemon.name,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(
            pokemon.name.toLowerCase()
          )}.gif`,
    }))

    const uniquePokemons = pokemons.filter((pokemon: any, index: any, self: any) => pokemons.findIndex((p: any) => p.id === pokemon.id) === index);
    //console.log(uniquePokemons)
    return uniquePokemons;
}