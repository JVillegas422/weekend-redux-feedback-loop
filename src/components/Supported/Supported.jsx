import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';

function Supported() {
    console.log('in Supported component');
    // Using hooks - useDipatch & useHistory
    const dispatch = useDispatch();
    const history = useHistory();
    // useSelector is for adding data to store
    const feedback = useSelector((store) => store.feedbackReducer);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (feedback.support >= 0 && feedback.support <= 5) {
            // useHistory is a hook to send to next page
            history.push('/4');
        }
        else {
            alert('Please submit a number between 1 and 5');
        };
    };

    return (
        <>
            <Header />
            <div className='changeFont'>
                <h2>How well are you being supported?</h2>
                <h3>Please add a number between 1 and 5.</h3>
                <p>1 being "not well.." and 5 being "Feel excellent!"</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        onChange={(evt) =>
                            dispatch({
                                type: 'SET_SUPPORT',
                                payload: evt.target.value,
                            })
                        }
                        type="number"
                        required
                    />
                    <div>
                        <button
                            className='btn-neon'
                        >
                            Next
                            <svg height="40" width="125">
                                <polyline points="0,0 125,0 125,40 0,40 0,00">
                                </polyline>
                            </svg>
                        </button>
                    </div>
                </div>

            </form>
        </>
    );
};

export default Supported;