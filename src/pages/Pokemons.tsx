import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./pokemons.module.css";
import { fetchPokemons } from "../api/fetchPokemons";
import LoadingScreen from "../components/LoadingScreen";
import { sleep } from "../utils/utils";
import { Pokemon } from "../types/types";

const Pokemons = () => {
    //States
    const [isLoading, setIsLoading] = useState(false);//default value is false
    const [query, setQuery] = useState('');
    const [pokemons, setPokemons] = useState<Array<Pokemon>>([])

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true);
            await sleep(1000);
            const allPokes = await fetchPokemons();
            setPokemons(allPokes);

            setIsLoading(false);
        }
        fetchAllPokemons();
    }, [])

    if (isLoading || !pokemons) {
        return <LoadingScreen />
    }

    const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => pokemon.name.toLowerCase().match(query.toLowerCase()))

    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav className={styles.nav}>
                    {filteredPokemons.map((pokemon) => (
                        <Link
                            key={pokemon.id}
                            className={styles.listItem}
                            to={`/pokemons/${pokemon.name.toLowerCase()}`}
                        >
                            <img
                                className={styles.listItemIcon}
                                src={pokemon.imgSrc}
                                alt={pokemon.name}
                            />
                            <div className={styles.listItemText}>
                                <span>{pokemon.name}</span>
                                <span>{pokemon.id}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </main>
            <Footer />
        </>
    )
}

export default Pokemons;