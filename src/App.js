import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import PolDetailsPage from './pages/pol-details/pol-details.page';
import ProtectedRoute from './components/protected-route/protected-route.component'; //Use custom component to protect the policy details route so that use must authenticate to be able to navigate there

import './App.css';

const App = () => {

  const history = useHistory();
  
  const [{ username, password }, setCredentials] = useState({ username: '', password: ''})
  const [accessToken, setAccessToken] = useState();
  const [userAuthenticated, setUserAuthenticated] = useState(false)
 
  // Adding in use effect to monitor for when access token gets saved to state from the handleSubmit function. Once token is available, can then re-direct to policy-details route
  useEffect(() => {
    if (accessToken) {
         //Directs to /policy-details route and passes the access token for grabbing the policy details
 
         history.push({
           pathname: '/policy-details',
           accessToken
         })
    }
  }, [accessToken])

  const handleChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target;

    setCredentials(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const info = {
      username,
      password,
      type: 'USER_PASSWORD_AUTH'
    }

    try {

      //Call API to get access token
      const req = await fetch(`https://api.bybits.co.uk/auth/token`, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'environment': 'mock',
          'Content-Type': 'application/json'
        } 
      });

      const data = await req.json();

      // Push access token to state
      setAccessToken(data.access_token);
    
      //Set user authenticated to be true so policy details page displays
      setUserAuthenticated(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    
    <div className='App container-fluid'>
      <Switch>
          <ProtectedRoute exact path='/policy-details' component={PolDetailsPage} userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated} /> 
          <Route exact path = '/'>
            <div className='login-wrap container'>
              <div className='row align-items-center'>
                <div className='col-sm-6 picture'></div>
                <div className='col-sm-6'>
                  <div className='login-title mt-5 mb-5'>Log In</div>
                  <form className='login-form' onSubmit={handleSubmit}>
                    <input className='username form-control mt-4 mb-4' name='username' type='text' value={username} placeholder='Your Username' onChange={handleChange} required />
                    <input className='password form-control mt-4 mb-4' name='password' type='password' value={password} placeholder='Your Password' onChange={handleChange} required />
                    {!username || !password ? 
                    <button className='btn btn-light float-right mt-3' disabled>Log in</button>
                    :
                    <button type='submit' className='btn btn-outline-info float-right mt-3'>Log in</button>
                    }
                  </form>
                </div>
              </div>
              
            </div>
          </Route>
      </Switch>   
    </div>
  );
}

export default App;
