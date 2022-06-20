import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Feelings() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_FEELINGS',
            payload: feeling,
        })
        history.push('/1');
    };


    return (
        <>
            <h3>How are you feeling today?</h3>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <input 
                    onChange={evt => setFeeling(Number(evt.target.value))}
                    type='range'
                    min='0'
                    max='5'
                    placeholder='Feeling?'
                    value={feeling}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Feelings;