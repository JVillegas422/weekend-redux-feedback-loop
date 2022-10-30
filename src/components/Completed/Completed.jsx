import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Completed() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_CLEAR'
        });
        history.push('/');
    };
    
    return (
        <>
            <h2>Thank you for the Feedback!</h2>
            <button
                onClick={handleSubmit}
                type="button"
            >
                Leave New Feedback
            </button>
        </>
    );
};

export default Completed;