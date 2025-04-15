import React from 'react';

export default function LoginTest() {
  return (
    <>
      <div>
        <section className="login-screen-sec">
          <div className="container">
            <div className="login-screen">
              <a href="index-2.html">
                <img
                  alt=""
                  className="img-responsive"
                  src="assets/img/logo.png"
                />
              </a>
              <form>
                <input
                  className="form-control"
                  placeholder="Useraname"
                  type="text"
                />
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
                <button className="btn btn-login" type="submit">
                  Login
                </button>
                <span>
                  You Have No Account?{' '}
                  <a href="signup.html"> Create An Account</a>
                </span>
                <span>
                  <a href="lost-password.html"> Forget Password</a>
                </span>
              </form>
            </div>
          </div>
        </section>
        <button className="w3-button w3-teal w3-xlarge w3-right">
          <i aria-hidden="true" className="spin fa fa-cog" />
        </button>
        <div
          className="w3-sidebar w3-bar-block w3-card-2 w3-animate-right"
          id="rightMenu"
          style={{
            display: 'none',
            right: '0',
          }}
        >
          <button className="w3-bar-item w3-button w3-large">Close ×</button>
          <ul id="styleOptions" title="switch styling">
            <li>
              <a
                className="cl-box blue"
                data-theme="colors/blue-style"
                href="javascript: void(0)"
              />
            </li>
            <li>
              <a
                className="cl-box red"
                data-theme="colors/red-style"
                href="javascript: void(0)"
              />
            </li>
            <li>
              <a
                className="cl-box purple"
                data-theme="colors/purple-style"
                href="javascript: void(0)"
              />
            </li>
            <li>
              <a
                className="cl-box green"
                data-theme="colors/green-style"
                href="javascript: void(0)"
              />
            </li>
            <li>
              <a
                className="cl-box dark-red"
                data-theme="colors/dark-red-style"
                href="javascript: void(0)"
              />
            </li>
            <li>
              <a
                className="cl-box orange"
                data-theme="colors/orange-style"
                href="javascript: void(0)"
              />
            </li>
            <li>
              <a
                className="cl-box sea-blue"
                data-theme="colors/sea-blue-style "
                href="javascript: void(0)"
              />
            </li>
            <li>
              <a
                className="cl-box pink"
                data-theme="colors/pink-style"
                href="javascript: void(0)"
              />
            </li>
          </ul>
        </div>
      </div>
      ;
    </>
  );
}
