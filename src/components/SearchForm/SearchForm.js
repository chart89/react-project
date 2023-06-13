import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { strSearch, getSearchString} from '../../redux/store';

const SearchForm = () => {

    const searchString = useSelector(getSearchString);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    /* if searchString exist - input placeholder equals state.searchString, else text: Search... */
    const placeHolderStr = (searchString) => {
        let plHoStr = 'Search...';

        if(searchString){
           plHoStr = searchString;
        }
        return plHoStr;
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(strSearch( search ));

        setSearch('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder={placeHolderStr(searchString)}  onChange={e => setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;