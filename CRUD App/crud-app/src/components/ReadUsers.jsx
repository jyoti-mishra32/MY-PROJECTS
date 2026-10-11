import DeleteUser from "./DeleteUser";

function ReadUsers({ users, setSelectedUser, setUsers  }) {

  return (
    <>
      <h1>User List</h1>

      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button onClick={() => setSelectedUser(user)}>
            Edit
          </button>

          <DeleteUser
             user={user}
             users={users}
             setUsers={setUsers}
          />

        </div>
      ))}
    </>
  );
}

export default ReadUsers;