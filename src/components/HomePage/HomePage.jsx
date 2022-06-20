import { useHistory } from "react-router-dom";

function HomePage() {
    const history = useHistory();

    return (
        <>
            <h3>Completed!</h3>
            <button onClick={() => {history.push('/')}}> 
            Go back to Home
            </button>
        </>
    )
}


export default HomePage;