import { Link, useLocation } from 'react-router-dom';
import { menuList } from './menulist';
import styles from './aside.module.css';

function Aside({ items }: AsideProps) {
    const { pathname } = useLocation();
    items = menuList;
    return (
        <nav className={styles.gnb}>
            <ul>
                {items?.map((x) => {
                    const active = pathname == x.path ? styles.active : '';
                    return (
                        <li key={x.id} className={active}>
                            <Link to={x.path}>{x.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export type AsideProps = {
    items?: { id: number; name: string; path: string }[];
};

export default Aside;
