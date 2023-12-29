
import { useNavigate, useParams } from "react-router-dom";
import Pokeball from "../assets/assets/pokeball.png";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import { sleep } from "../utils/utils";
import LoadingScreen from "../components/LoadingScreen";

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);//default value is false
    const [pokemon, setPokemon] = useState<PokemonDetails>()
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        async function getPokemon() {
            setIsLoading(true);
            await sleep(1000);
            const fetchPoke = await fetchPokemon(name as string)
            setPokemon(fetchPoke)
            setIsLoading(false);
        }
        getPokemon()
    }, [name])//this should change if name changes

    if (isLoading || !pokemon) {
        return <LoadingScreen />
    }
    return (
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={styles.pokeballImg} src={Pokeball} alt="pokeball" />
                Go back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle} >{name?.toUpperCase()}</div>
                    <div>Nr.{pokemon?.id}</div>
                    <div><img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={pokemon?.name} /></div>
                    <div>HP: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense: {pokemon?.defense}</div>

                </main>
            </div>
            <Footer />
        </>
    )
}

export default Pokemon;