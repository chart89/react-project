import styles from './NavBar.module.scss';

const NavBar = () => {

    return (
        <nav>
            <div className={styles.navbar_lf}>
                <a href="/"><span className="fa fa-tasks"></span></a>
            </div>
            <div className={styles.navbar_rh}>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/favorite"><li>Favorite</li></a>
                    <a href="/about"><li>About</li></a>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar;