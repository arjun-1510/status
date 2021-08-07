import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Redirect } from "react-router-dom";
import './Form.css';

const queries = {
  xs: '(max-width:320px)',
  sm: '(max-width:720px)',

}

const Form = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Redirect to="/default" />;
  }

  return (
    <div className='node'  queries={queries} style={{backgroundImage:'url(https://www.intheblack.com/-/media/intheblack/allimages/sponsored-content/2018/dexus-office-space.jpg?rev=835b5eb0fcd5481b960b7abfeec3eed2)',height:'100vh',width:'100%',backgroundRepeat:'no-repeat',backgroundSize:'100%'}}>
    <div className="section is-fullheight">
      {loggedIn && <Redirect to="/default" />}
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'35px'}}>Login</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
