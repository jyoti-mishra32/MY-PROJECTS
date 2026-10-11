import DeleteUser from "./DeleteUser";
function ReadUsers({ users, setSelectedUser, setUsers }) {

  return (
    <>
      <h2>Users List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

          <button
            onClick={() => {
              console.log(user);
              setSelectedUser(user);
            }}
          >
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