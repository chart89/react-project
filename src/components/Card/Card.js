import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addFavorite, removeCard } from '../../redux/store';
import clsx from 'clsx';

const Card = ({title, id, isFavorite}) => {

    const dispatch = useDispatch();

    const favoriteCardId = () => {
        
        dispatch(addFavorite(id));
        };

    const removeCardId = () => {

        dispatch(removeCard(id));
    }
        
    return (
        <li className={styles.card}>
            {title}
            <div>
                <button className={clsx(styles.button, isFavorite === true && styles.isActive )} onClick={()=>favoriteCardId()}><span className="fa fa-heart" /></button>
                <button className={styles.button} onClick={()=>removeCardId()}><span className="fa fa-heart" /></button>
            </div>
        </li>
    );
};

export default Card;