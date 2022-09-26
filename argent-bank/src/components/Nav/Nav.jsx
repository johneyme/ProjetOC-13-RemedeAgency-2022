import { Link } from 'react-router-dom';
import logoArgentBank from '../../assets/argentBankLogo.png';
import './Nav.css';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userActions } from '../../utils/Redux/userSlice';

/** @function create the header component
 * and manage the infos shown based on the user's info recovered from the database.
 *
 * @component
 * @returns (<Nav/>)
 */

function Nav() {
  const { token } = useSelector((state) => state.user);
  const { firstName } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logoArgentBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {token ? (
        <div className="main-nav-content">
          <div
            className="main-nav-item"
            onClick={() => {
              navigate({ pathname: '/profile' });
            }}
          >
            <i className="fa fa-user-circle"></i>
            {firstName}
          </div>
          <div
            className="main-nav-item"
            onClick={() => {
              dispatch(userActions.logout());
            }}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </div>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
