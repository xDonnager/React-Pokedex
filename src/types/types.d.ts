export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
  };
export type PokemonDetails = Pokemon &{
    hp: number;
    attack: number;
    defense: number;
}