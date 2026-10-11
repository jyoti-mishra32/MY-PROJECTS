import { useState } from "react";

function CreateUser({ setUsers }) {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");

  const handleAddUser = () => {
    if (name === "" || email === "") {
  alert("Please fill all fields");
  return;
}

   const newUser = {
    id: Date.now(),
    name: name,
    email: email
   };

   setUsers((previousUsers) => [
    ...previousUsers,
    newUser
   ]);

   setName("");
   setEmail("");
  }

  return (

    <div className="create-user">
    <input 
    type="text"
    placeholder="Enter name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />

    <input 
    type="text" 
    placeholder="Enter email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />

    <button onClick={handleAddUser}>
      Add User
    </button>
    </div>
  );
}

export default CreateUser;