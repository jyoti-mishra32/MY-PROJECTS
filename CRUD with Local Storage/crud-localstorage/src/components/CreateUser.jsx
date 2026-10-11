import { useState } from "react";

function CreateUser({ setUsers }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = () => {

    const newUser = {
      id: Date.now(),
      name: name,
      email: email
    };

    setUsers((previousUsers) => [...previousUsers, newUser]);

    setName("");
    setEmail("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleAddUser}>
        Add User
      </button>
    </>
  );
}

export default CreateUser;