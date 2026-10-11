function DeleteUser({ user, users, setUsers }) {
  const handleDelete = () => {
    setUsers(
      users.filter((currentUser) => currentUser.id !== user.id)
    );
  }

  return (
    <>
      <button className="delete-btn"onClick={handleDelete}>
        Delete
      </button>
    </>
  )
}

export default DeleteUser;