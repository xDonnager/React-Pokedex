import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

//Assets
import Pokeball from "../assets/assets/pokeball.png";
import Pikachu from "../assets/assets/pikachu.png";
import Location from "../assets/assets/pointer.png";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={Pikachu} alt="pokeball"></img>
                Pokemons
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={Pokeball} alt="pokeball"></img>
                Items
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={Location} alt="pokeball"></img>
                Map
            </Link>
        </footer>
    )
}

export default Footer;