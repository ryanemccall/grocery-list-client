//imports 
import React, { useEffect, useState } from 'react';
import bake from './assets/logos/bake-orange.png'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import GroceryListCreate from './components/GroceryListCreate';
import GroceryListGet from './components/GroceryListGet';
import GroceryListDelete from './components/GroceryListDelete';
import GroceryListUpdate from './components/GroceryListUpdate';
import GroceryListIndex from './components/GroceryListIndex';
import ValidateSession from './auth/ValidateSession';


//test for Ryan ========!!!!!!


//app call

function App() {
  
  //put session auth here because it will funnel down to all children 
  const [sessionToken, setSessionToken] = useState("");

  
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
    setSessionToken(newToken);
    console.log(`updateToken from APP.JS : ${newToken}`);
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
<<<<<<< HEAD

=======
>>>>>>> origin/develop
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
            
<<<<<<< HEAD

=======
>>>>>>> origin/develop
    </div>
  )
};


export default App;
