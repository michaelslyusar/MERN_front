import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { set_alert,remove_alert} from '../../redux/slices/alertSlice';
import { v4 as uuidv4 } from 'uuid';

const Register = (setAlert) => {
  const id = uuidv4();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      dispatch(
        set_alert({ alertType: 'danger', msg: 'Passwords dont match', id: id })
      );
      setTimeout(() => dispatch(remove_alert({id:id})),5000)
    } else {
      console.log('SUCCESS');
    }
  };

  return (
    <section className='container'>
      <Fragment>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => onChange(e)}
              name='email'
              required
            />
            <small className='form-text'>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='6'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
              minLength='6'
              required
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </Fragment>
    </section>
  );
};

export default Register;
