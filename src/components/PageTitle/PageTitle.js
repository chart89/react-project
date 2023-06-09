import styles from '../Hero/Hero.module.scss';

const PageTitle = props => {

    return (
        <h1 className={styles.title}>{props.children}</h1>
    )
}

export default PageTitle;