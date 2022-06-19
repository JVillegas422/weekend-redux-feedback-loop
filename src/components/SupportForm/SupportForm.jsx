import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SupportForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [supported, setsupported] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_SUPPORTED',
            payload: supported,
        })
        history.push('/supported');
    };


    return (
        <>
            <h3>How well are you being supported?</h3>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <input 
                    onChange={evt => setsupported(Number(evt.target.value))}
                    type='range'
                    min='0'
                    max='5'
                    placeholder='Feel Supported?'
                    value={supported}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default SupportForm;