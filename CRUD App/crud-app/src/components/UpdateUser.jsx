import { useState } from "react";

function UpdateUser({ user, users, setUsers }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    const updatedUsers = users.map((currentUser) => {
      if (currentUser.id === user.id) {
        return {
          id: user.id,
          name: name,
          email: email
        };
      }

      return currentUser;
    });

    setUsers(updatedUsers);
  };

  return (
    <div className="update-user">
      <h2>Update User</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleUpdate}>
        Update User
      </button>
    </div>
  );
}

export default UpdateUser;