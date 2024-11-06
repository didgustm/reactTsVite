import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <Link to="/">React + Ts + Vite</Link>
            </h1>
        </header>
    );
}

export default Header;
