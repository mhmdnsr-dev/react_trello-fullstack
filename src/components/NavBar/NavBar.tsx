import { useContext } from 'react';
import logo from '../../assets/images/logo-96.png';
import styled from './NavBar.module.css';
import { Form, Link, NavLink } from 'react-router-dom';
import { authContext } from '../../context/authContext';

const NavBar = () => {
  const {
    whoiam: { isAuthenticated },
  } = useContext(authContext);

  return (
    <nav className="navbar navbar-expand-lg bg-secondary-subtle">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className={styled.logo} src={logo} alt="Trello Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? styled.active : ''}`
                    }
                    to="register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? styled.active : ''}`
                    }
                    to="signin">
                    Signin
                  </NavLink>
                </li>
              </>
            )}
            {isAuthenticated && (
              <li className="nav-item dropdown me-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className=" fa-regular fa-user"></i>
                </a>
                <ul className={`dropdown-menu ${styled['drop-down']}`}>
                  <li>
                    <button className="btn dropdown-item">Profile</button>
                  </li>
                  <li>
                    <Form method="DELETE" action="/">
                      <button type="submit" className="btn dropdown-item">
                        Logout
                      </button>
                    </Form>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
