import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { getFilteredFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';


const Favorite = () => {

    const cards = useSelector(state => getFilteredFavoriteCards(state));
    
    if(cards.length === 0) return <Navigate to="/" />
    return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <p>Your cards</p>
            <div className={styles.columnFav}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />)}
                </ul>
            </div>
        </div>
    );
}

export default Favorite;