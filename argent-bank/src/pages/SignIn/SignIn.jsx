import './SignIn.css';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { api } from '../../utils/axios';
import { userActions } from '../../utils/Redux/userSlice';

/** @function manage the authentication of the user by communicating
 * with the database in order to verify the login infos (email/password).
 * If correct, it navigates to the profile page.
 *
 * @returns (<SignIn/>)
 */

function SignIn() {
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState();

  // useForm()
  const { register, formState, handleSubmit } = useForm();
  const navigate = useNavigate();

  // Validate Form
  function onSubmit(data) {
    api
      .login(data.username, data.password)
      .then((user) => {
        dispatch(userActions.login(user.body.token));
        api.getProfile().then((userInfos) => {
          dispatch(userActions.setUserInfos(userInfos.body));
          navigate('/profile');
        });
      })
      .catch(setLoginError('Un problème est survenue'));
  }

  return (
    <main className="sign-in-page bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label>Username</label>
            <input
              type="text"
              id="username"
              {...register('username', {
                required: true,
              })}
            />
            {formState.errors.username && (
              <p style={{ color: 'red' }}>Username is required</p>
            )}
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register('password', { required: true })}
            />
          </div>
          {formState.errors.password && (
            <p style={{ color: 'red', textAlign: 'left' }}>Invalid password</p>
          )}
          {loginError && (
            <p style={{ color: 'red', textAlign: 'left' }}>{loginError}</p>
          )}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label>Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
