import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';

function Comments() {
    console.log('in Supported component');
    // Using hooks - useDipatch & useHistory
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        history.push('/5')
    };

    return (
        <>
            <Header />
            <div className='changeFont'>
                <h2>Any comments you want to leave?</h2>
                <h4>Comments</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        onChange={(evt) =>
                            dispatch({
                                type: 'SET_COMMENTS',
                                payload: evt.target.value,
                            })
                        }
                        type="text"
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

export default Comments;