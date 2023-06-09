import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { strSearch } from '../../redux/store';

const SearchForm = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(strSearch( search ));

        setSearch('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." onChange={e => setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;