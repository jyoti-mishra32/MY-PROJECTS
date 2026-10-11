import { useState } from "react";
import Users from "./data/Users.json";
import CreateUser from "./components/CreateUser";
import ReadUsers from "./components/ReadUsers";
import UpdateUser from "./components/Updateuser";
import DeleteUser from "./components/DeleteUser";
import "./App.css";
import "./Index.css"

function App() {
  const[users, setUsers] = useState(Users);
  const[selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app.container">
    <CreateUser setUsers={setUsers}/>

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
    </div>
  )
}

export default App;