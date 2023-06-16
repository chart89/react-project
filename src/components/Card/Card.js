import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = ({title, id, isFavorite}) => {

    const dispatch = useDispatch();

    const favoriteCardId = () => {
        
        dispatch(addFavorite(id));
        }
        
    return (
        <li className={styles.card}>
            {title} <button className={clsx(styles.button, isFavorite === true && styles.isActive )} onClick={()=>favoriteCardId()}><span className="fa fa-heart" /></button></li>
    );
};

export default Card;