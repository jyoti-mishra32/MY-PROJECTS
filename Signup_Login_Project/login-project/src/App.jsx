import { useState, useEffect } from "react";
import "./App.css";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Listing from "./components/Listing";

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[showListing, setShowListing] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="signup-card">

      {isLoggedIn ? (
        showListing ? (
          <Listing setShowListing={setShowListing}/>
        ) : (
        <Profile 
        setIsLoggedIn={setIsLoggedIn}
        setIsLogin={setIsLogin}
        setShowListing={setShowListing}
        />
        )
      ) : isLogin ? (
        <Login 
        setIsLogin={setIsLogin}
        setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Signup setIsLogin={setIsLogin}/>
      )}

    </div>
  );
}

export default App;