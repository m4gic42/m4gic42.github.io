export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          Alberto Spalvieri
        </a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="Physics.html" className="navbar__links">
              Physics
            </a>
          </li>
          <li className="navbar__item">
            <a href="/stories" className="navbar__links">
              My stories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
