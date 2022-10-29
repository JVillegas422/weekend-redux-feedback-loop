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
            <h2>Any comments you want to leave?</h2>
            <h4>Comments</h4>
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
                    <button>Next Page</button>
                </div>

            </form>
        </>
    );
};

export default Comments;