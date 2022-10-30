import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './HomePage.css';
function HomePage() {
    const history = useHistory();
    
    const handleSubmit = () => {
        history.push('/1');
    };

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="changeFont">
                <h1>Please provide feedback</h1>
                <h2>Click Start!</h2>
            </div>
            <button
                onClick={handleSubmit}
                className='btn-neon'
            >
                Start
                <svg height="40" width="110">
                        <polyline points="0,0 110,0 110,40 0,40 0,00">
                        </polyline>
                </svg>
            </button>
        </>
    );
};

export default HomePage;