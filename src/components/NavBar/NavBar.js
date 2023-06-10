import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <div className={styles.navbar_lf}>
                <a href="/"><span className="fa fa-tasks"></span></a>
            </div>
            <div className={styles.navbar_rh}>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar;