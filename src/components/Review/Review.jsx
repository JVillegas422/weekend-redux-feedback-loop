import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Header from '../Header/Header';

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
            <Header />
            <div className='changeFont'>
            <h2>Review Your Feedback!</h2>
                <div>
                    <h3>Feelings: {feedback.feeling}</h3>
                    <h3>Understanding: {feedback.understanding}</h3>
                    <h3>Support: {feedback.support}</h3>
                    <h3>Comments: {feedback.comments}</h3>
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className='btn-neon'
            >
                Submit
                <svg height="40" width="110">
                        <polyline points="0,0 110,0 110,40 0,40 0,00">
                        </polyline>
                </svg>
            </button>
        </>
    );
};

export default Review;