function DeleteUser({ user, users, setUsers }) {

  const handleDeleteUser = () => {
  setUsers(users.filter((item) => item.id !== user.id));
};
  return (

    <>
    <button onClick={handleDeleteUser}>Delete</button>
    </>
  );
}

export default DeleteUser;