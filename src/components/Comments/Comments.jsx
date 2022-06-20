import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from "react"

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments,
        })
        history.push('/4');
    };

    return (
        <>
            <h3>Any comments you want to leave?</h3>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <input 
                    onChange={evt => setComments(evt.target.value)}
                    type='text'
                    placeholder='Add Comments Here'
                    value={comments}
                />
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Comments;