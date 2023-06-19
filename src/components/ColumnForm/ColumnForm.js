import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = ({listId}) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>
                Add column
            </Button>
        </form>
	);
};

export default ColumnForm;