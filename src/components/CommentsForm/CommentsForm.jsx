import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CommentsForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [commentsForm, setCommentsForm] = useState('');

    return (
        <>
        </>
    )
}

export default CommentsForm;