import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../redux/slices/usersApiSlice';
import { logout } from '../redux/slices/authSlice';
import { FaSignInAlt, FaSignOutAlt, FaAngleDown } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const logoutHandler = async (e) => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevConnector
        </Link>
      </h1>
      {userInfo ? (
        <>
          <div className='header_dropdown'>
            <div className='header_dropdown_button'>
              <FaAngleDown />
              <Link>{userInfo.name}</Link>
            </div>
            <div className='header_dropdown_options'>
              <Link to='/profile'>Profile</Link>
              <Link onClick={logoutHandler}>Logout</Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <ul>
            <li>
              <FaSignInAlt />
              <Link to='/login'>Sign In</Link>
            </li>
            <li>
              <FaSignOutAlt />
              <Link to='/register'>Sign Up</Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default Header;
