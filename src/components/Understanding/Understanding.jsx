import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding,
        })
        history.push('/2');
    };


    return (
        <>
            <h3>How well are you understanding the content?</h3>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <input 
                    onChange={evt => setUnderstanding(Number(evt.target.value))}
                    type='range'
                    min='0'
                    max='5'
                    placeholder='Feel Supported?'
                    value={understanding}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Understanding;