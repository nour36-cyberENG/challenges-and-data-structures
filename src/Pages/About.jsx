import { useNavigate } from "react-router-dom";
import "../components/styles/Home.css";

export default function About() {
    const navigate = useNavigate(); 

    function handleClick() {
        navigate("/");
    }

    return (
        <section className="about-page">
            <header className="about-header">
                <h1>About InstaBoard</h1>
                <p className="lead">InstaBoard makes discovering, connecting and keeping track of interesting people fast and beautiful. We collect public profile information and present it in a clean, responsive dashboard so you can explore potential collaborators, team members or friends — all in one place.</p>
            </header>

            <div className="about-content">
                <h2>Why use InstaBoard?</h2>
                <ul className="benefits-list">
                    <li><strong>Quick discovery:</strong> Browse curated profile cards with photos and essential contact details.</li>
                    <li><strong>Keep favorites:</strong> Like profiles to save people to your Liked Users list for later reference.</li>
                    <li><strong>One-click profiles:</strong> View full profile details with a single click — no copying or retyping required.</li>
                    <li><strong>Privacy-first:</strong> We display only public demo data and never share your saved list without your consent.</li>
                </ul>

                <h2>Services we provide</h2>
                <p className="services">Profile browsing, saved favorites, quick contact overview and an easy-to-use interface designed for screens of all sizes. We also provide simple export and management of your liked users via local storage.</p>

                <div className="about-actions">
                    <button className="primary-btn" onClick={handleClick}>Back to Home</button>
                </div>
            </div>
        </section>
    );
}