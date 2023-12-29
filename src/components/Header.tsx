import styles from './Header.module.css';

type SearchBarProps = {
    query: string;
    setQuery: (query: string) => void
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
    return (
        <input className={styles.input}
            type="text"
            placeholder="Search Pokémon"
            value={query}
            onChange={(event) => setQuery(event.target.value)} />
    )

}
const Header = ({ query, setQuery }: SearchBarProps) => {
    return (
        <header className={styles.header}>
            <SearchBar query={query} setQuery={setQuery}/>
        </header>
    )
}

export default Header;