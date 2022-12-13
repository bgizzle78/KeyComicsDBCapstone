import React, { useState }  from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./views/Header";
import ApplicationViews from "./views/ApplicationViews";
import { useEffect } from 'react';
import Authorize from './views/Authorize';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);


  useEffect(()=>{
    if(!localStorage.getItem("UserProfile")){
      setIsLoggedIn(false)
      
    }
  },[isLoggedIn])

  return (
    <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        { isLoggedIn ?
        <ApplicationViews  />
        :
        <Authorize setIsLoggedIn={setIsLoggedIn}/>
        }
    </Router>
  );
}

export default App;