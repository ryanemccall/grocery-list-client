//imports 
import React, { useEffect, useState } from 'react';
import bake from './assets/logos/bake-orange.png'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ValidateSession from './auth/ValidateSession';
import GroceryListIndex from "./components/GroceryListIndex";
import Navigation from './site/Navbar';
import SiteFooter from './site/Footer';

//app call

function App() {
  
  //put session auth here because it will funnel down to all children 
  const [sessionToken, setSessionToken] = useState("");
  const [username, setUsername] = useState("");
  
  useEffect(() => {
 //updates sessionToken state variable if browser has saved a sessionToken in localStorage.  
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
    // Because we pass an empty array as a second argument, there is no change our useEffect method is tracking to re-run later, so the effect runs only upon initial component load.
  }, [])
  
  //takes in a token and saves it two places--in our localStorage and in our state variable, sessionToken. 
  
  const updateToken = (newToken) => {
    //sets value of token to the value of newToken
    //if token does not exists, creates a new key value pair
    localStorage.setItem("token", newToken);
    console.log(newToken)
    setSessionToken(newToken);
  };

  //removes token upon end of session
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  }
  
  const userOnlyViews = () => {
    return (
      sessionToken === localStorage.getItem("token") ?
        //if the sessionToken and token in local storage match then we can access user grocery lists
        <GroceryListIndex
          //pass in token as props
          username={username}
          token={sessionToken} />
        //otherwise if the tokens don't match then we push them back to the validate session page 
        : <ValidateSession
        updateToken = {updateToken}
        />
    )
  }
  
  //below is the actual ONE allowable return of the app function
  
  return (
    //need to create a logout button here and import logout={clearToken} as prop

    <div className="App">
      <header className="App-header">
        <h1>LISTO</h1>
        <img src={bake}
          className="App-logo"
          alt="logo" />
        <h2>GOOD FOOD IS GOOD MOOD</h2>
     </header>
      
      <Navigation
        clickLogout={clearToken} />
      {userOnlyViews()}
      <SiteFooter />
            
    </div>
  )
};

export default App;
