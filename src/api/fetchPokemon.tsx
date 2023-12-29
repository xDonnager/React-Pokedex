import { PokemonDetails } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemon(pokemonName: string): Promise<PokemonDetails> {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(pokemonName)}`
      );

    if (!response.ok) throw new Error('Something went wrong');

    const data = await response.json();

    return {
        name: data.name,
        id: data.id,
        imgSrc: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
    }

}