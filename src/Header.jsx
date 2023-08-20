import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav id="header" className="navbar sticky-top navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src="src/assets/bearded_garden_trans.png" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.beardedgardenplants.com/">
              Shop
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/alocasia">
                Alocasia
              </Link>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Epipremnum & Vines
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Hoya
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Monstera
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Peperomia
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Philodendron
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Pothos
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Succulents
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Syngonium
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
