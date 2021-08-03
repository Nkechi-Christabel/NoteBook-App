import { Link } from "react-router-dom";

const NavBar = ({ search, handleChange }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand pb-0 pr-5 ml-lg-5">Note Book</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-lg-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                My notes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/NewNote">
                New notes
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 seach-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleChange}
            />
            {/* <button
            
              className="btn search-btn my-2 my-sm-0"
              type="submit"
            >
              Search
            </button> */}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
