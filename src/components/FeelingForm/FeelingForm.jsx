import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function FeelingForm() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingForm, setFeelingForm] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_FEELINGS',
            payload: feelingForm,
        })
        history.push('/feelings');
    };


    return (
        <>
            <h3>How are you feeling today?</h3>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <input 
                    onChange={evt => setFeelingForm(Number(evt.target.value))}
                    type='range'
                    min='0'
                    max='5'
                    placeholder='Feeling?'
                    value={feelingForm}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default FeelingForm;