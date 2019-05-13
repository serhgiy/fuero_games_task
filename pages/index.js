import "../styles/style.scss";

import React, { useState, useEffect } from "react";

import Head from "next/head";

/*
 * I didn't do that task from point 1
 * because the .dll probably didn't work correctly on my machine.
 * it did however return status:200, so I just console.log the response
 */
function checkCredentials(login, pass) {
  fetch("http://localhost:5000/Login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login: login,
      password: pass
    })
  }).then(response => console.log(response));
}

export default () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>

      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form
                    className="form-signin"
                    id="form-signin"
                    onSubmit={e => {
                      checkCredentials(login, pass);
                      e.preventDefault();
                    }}
                  >
                    <input
                      type="text"
                      id="login"
                      className="form-control"
                      placeholder="Login"
                      value={login}
                      onChange={e => setLogin(e.target.value)}
                      required
                      autofocus
                    />

                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      value={pass}
                      onChange={e => setPass(e.target.value)}
                      required
                    />

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      form="form-signin"
                      disabled={!(login && pass)}
                    >
                      Sign in
                    </button>
                    <p className="skip-login">
                      <a href="/dashboard">
                        or continue without credentials :)
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
