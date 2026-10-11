import { useState } from "react";

function UpdateUser({ user, users, setUsers }) {

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdateUser = () => {
  setUsers(
    users.map((item) =>
      item.id === user.id
        ? { ...item, name: name, email: email }
        : item
    )
  );
};

  return (
    <>
      <h2>Update User</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleUpdateUser}>Update User</button>
    </>
  );
}

export default UpdateUser;