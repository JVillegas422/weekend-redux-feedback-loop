import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function HomePage() {
    const history = useHistory();
    
    const handleSubmit = () => {
        history.push('/1');
    };

    return (
        <>
            <Header />
            <h1>Please provide feedback</h1>
            <h2>Click button to get started!</h2>
            <button
                onClick={handleSubmit}
            >
                Start
            </button>
        </>
    );
};

export default HomePage;