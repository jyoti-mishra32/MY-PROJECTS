import { useState, useEffect } from "react";

import CreateUser from "./components/CreateUser";
import ReadUsers from "./components/ReadUsers";
import UpdateUser from "./components/UpdateUser";

function App() {

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <h1>CRUD with Local Storage</h1>

      <CreateUser setUsers={setUsers} />

      <ReadUsers
        users={users}
        setSelectedUser={setSelectedUser}
        setUsers={setUsers}
      />

      {selectedUser && (
        <UpdateUser
          user={selectedUser}
          users={users}
          setUsers={setUsers}
        />
      )}
    </>
  );
}

export default App;