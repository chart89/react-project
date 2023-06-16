import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';

const Card = ({title, id}) => {

    const dispatch = useDispatch();

    const favoriteCardId = () => {
        
        dispatch(addFavorite(id));
        }
        
    return (
        <li className={styles.card}>
            {title} <button className={styles.button} onClick={()=>favoriteCardId()}><span className="fa fa-heart" /></button></li>
    );
};

export default Card;