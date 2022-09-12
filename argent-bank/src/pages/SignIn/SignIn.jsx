import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="signin-page">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label>Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label>Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>
            <button className="sign-in-button">
              <Link to="/user">Sign In</Link>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
