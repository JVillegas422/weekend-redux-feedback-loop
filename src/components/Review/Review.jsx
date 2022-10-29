import { useSelector } from 'react-router-dom';
import { useHistory } from 'react-redux';

function Review() {
    const history = useHistory();
    const feedback = useSelector((store) => store.feedbackReducer);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        history.push('/6');
        postFeedback();
    };

    const postFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback,
        })
          .then((response) => {
            console.log('in postFeedback', response);
          })
          .catch((err) => {
            console.log('Error in postFeedback', err);
          });
    };

    return (
        <>
            <h2>Review Your Feedback!</h2>
            <div>
                <h3>Feelings: {feedback.feeling}</h3>
                <h3>Understanding: {feedback.understanding}</h3>
                <h3>Support: {feedback.supported}</h3>
                <h3>Comments: {feedback.comments}</h3>
            </div>
            <button
                onClick={handleSubmit}
            >
                Submit
            </button>
        </>
    );
};

export default Review;