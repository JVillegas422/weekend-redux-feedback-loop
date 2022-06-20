// import { useHistory, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

// function ReviewFeedback() {

//     const history = useHistory();
//     const dispatch = useDispatch();


//     const comments = useSelector(store => store.comments);
//     const feelings = useSelector(store => store.feelings);
//     const supported = useSelector(store => store.supported);
//     const understanding = useSelector(store => store.understanding);

//     const onSubmit = () => {
//         axios.post('/feedback', {
//             comments,
//             feelings,
//             supported,
//             understanding
//         })
//         .then(() => {
//             dispatch({
//                 type: 'RESET_VALUES'
//             })
//             history.push('/')
//         })
//         .catch((err) => {
//             console.log('err feedbackReview failed', err);
//         })
//     }


//     return (
//         <>
//             <h3>Review Your Feedback</h3>
//                 <p><Link to="/">Feelings:</Link> {feelings}</p>
//                 <p><Link to="/1">Understanding: </Link>{understanding}</p>
//                 <p><Link to="/2">Supported:</Link> {supported}</p>
//                 <p><Link to="/3">Comments:</Link> {comments}</p>

//             <button onClick={onSubmit}>
//                 Submit
//             </button>
//         </>
//     )

// }

// export default ReviewFeedback;