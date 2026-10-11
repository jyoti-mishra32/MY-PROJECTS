function Profile({ setIsLoggedIn, setIsLogin, setShowListing }) {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <h2>Welcome, {user.name}!</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button onClick={() => setShowListing(true)}>
        View Listing
      </button>
      
      <button onClick={() => {
        setIsLoggedIn(false);
        setIsLogin(false);
        localStorage.removeItem("user");
      }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;