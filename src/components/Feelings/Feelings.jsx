// import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Feelings() {
    console.log('in Feelings component');
    // Using hooks - useDipatch & useHistory
    const dispatch = useDispatch();
    const history = useHistory();
    // useSelector is for adding data to store
    const feedback = useSelector((store) => store.feedbackReducer);
    // const [feelingsRate, setFeelingsRate] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (feedback.feeling >= 0 && feedback.feeling <= 5) {
            // useHistory is a hook to send to next page
            history.push('/2');
        }
        else {
            alert('Please submit a number between 1 and 5');
        };
    };

    return (
        <>
            <h2>How are you feeling today?</h2>
            <h3>Please add a number between 1 and 5.</h3>
            <p>1 being "not well.." and 5 being "Feel excellent!"</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        onChange={(evt) =>
                            dispatch({
                                type: 'SET_FEELING',
                                payload: evt.target.value,
                            })
                        }
                        type="number"
                        required
                    />
                    <button>Next Page</button>
                </div>

            </form>
        </>
    );
};

export default Feelings;