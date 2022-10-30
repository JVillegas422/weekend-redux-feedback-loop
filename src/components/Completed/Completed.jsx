import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';

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
            <Header />
            <div className='changeFont'>
                <h2>Thank you for the Feedback!</h2>
            </div>
            <button
                onClick={handleSubmit}
                type="button"
                className='btn-neon'
            >
                <span>Leave New Feedback</span>
                <svg height="120" width="210">
                        <polyline points="0,0 210,0 210,120 0,120 0,00">
                        </polyline>
                </svg>
            </button>
        </>
    );
};

export default Completed;