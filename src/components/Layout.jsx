
import Navigation from "./Navigation";
import "./styles/Layout.css";

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      
      <Navigation />

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} InstaBoard | All Rights Reserved 📱</p>
      </footer>
    </div>
  );
}
