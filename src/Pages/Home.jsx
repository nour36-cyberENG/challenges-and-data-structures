import { Link } from "react-router-dom";
import "../components/styles/Home.css";
import HeroIllustration from "../assets/hero-illustration.svg";

export default function Welcom(){
        return (
            <section className="home-hero">
                <div className="hero-inner">
                    <div className="hero-copy">
                        <h1>Discover great people. Build better teams.</h1>
                        <p className="hero-lead">InstaBoard helps you browse, save and review public profiles quickly — ideal for building teams, outreach, or inspiration. Fast, beautiful and private.</p>

                        <div className="hero-ctas">
                            <Link to="/team" className="btn primary">Browse Team</Link>
                            <Link to="/liked-users" className="btn outline">Saved Favorites</Link>
                        </div>
                    </div>

                    <div className="hero-art">
                        <img src={HeroIllustration} alt="Illustration of profiles and cards" />
                    </div>
                </div>
            </section>
        );
}