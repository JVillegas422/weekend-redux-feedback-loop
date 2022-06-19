import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function ReviewFeedback() {

    const history = useHistory();
    const dispatch = useDispatch();


    const commentsInfo = useSelector(store => store.commentsInfo);
    const feelings = useSelector(store => store.feelings);
    const supported = useSelector(store => store.supported);
    const understandingContent = useSelector(store => store.understandingContent);

    const feedbackReview = () => {
        axios.post('/feedbackReview', {
            commentsInfo,
            feelings,
            supported,
            understandingContent
        })
        .then(() => {
            dispatch({
                type: ''
            })
            history.push('/')
        })
        .catch((err) => {
            console.log('err feedbackReview failed', err);
        })
    }


    return (
        <>
            <h3>Review Your Feedback</h3>
            <div>
                {commentsInfo}
            </div>
            <div>
                {feelings}
            </div>
            <div>
                {supported}
            </div>
            <div>
                {understandingContent}
            </div>

            <button onClick={feedbackReview}>
                Submit
            </button>
        </>
    )

}

export default ReviewFeedback;