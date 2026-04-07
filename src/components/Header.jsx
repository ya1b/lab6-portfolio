import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Portfolio</Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          ☰
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/projects">Projects</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/messages">Messages</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}