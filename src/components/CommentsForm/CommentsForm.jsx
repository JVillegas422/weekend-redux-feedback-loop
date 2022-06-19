import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CommentsForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [commentsForm, setCommentsForm] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsForm,
        })
        history.push('/displayComments');
    };

    return (
        <>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <input 
                    onChange={evt => setCommentsForm(evt.target.value)}
                    type='text'
                    placeholder='Add Comments Here'
                    value={commentsForm}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default CommentsForm;