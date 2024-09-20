import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setCredentials } from '../redux/slices/authSlice';
import { useUpdateUserMutation } from '../redux/slices/usersApiSlice';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.setName, userInfo.setEmail]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error('Passwords do not match!');
    }else{
      try{
        console.log(name);
        console.log(email);
        const res = await updateProfile({
          _id:userInfo._id,
          name,
          email,
          password
        }).unwrap();
        dispatch(setCredentials({...res}));
        toast.success('Profile updated');
      }catch(err){
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <section className='container'>
      <Fragment>
        <h1 className='large text-primary'>Update User Profile</h1>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email'
            />
            
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength='6'
            />
          </div>

          <input type='submit' className='btn btn-primary' value='Update' />
        </form>
       
      </Fragment>
    </section>
  );
};

export default ProfileScreen;
