
import { useNavigate } from "react-router-dom";
import "../components/styles/NotFound.css";

export default function NotFound() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <button onClick={handleClick}>Go to Home</button>
        </div>
    );
}