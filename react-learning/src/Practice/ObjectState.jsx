import { useState } from "react";

function ObjectState() {
  const [user,setUser] = useState({
    name: "Jyoti",
    age: 22 
  });

  return (
    <>
    <h2>{user.name}</h2>
    <p>{user.age}</p>

    <button onClick={() => setUser({...user,age: 23 })}>
      Change Age
    </button>
    </>
  );
}

export default ObjectState;