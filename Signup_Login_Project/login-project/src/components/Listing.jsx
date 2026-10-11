import { useState } from "react";

function Listing({ setShowListing }) {
  const users = [
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com"
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com"
    },
    {
      id: 3,
      name: "Aman",
      email: "aman@gmail.com"
    },
    {
      id: 4,
      name: "Neha",
      email: "neha@gmail.com"
    },
    {
      id: 5,
      name: "Riya",
      email: "riya@gmail.com"
    },
    {
      id: 6,
      name: "Karan",
      email: "karan@gmail.com"
    },
    {
      id: 7,
      name: "Simran",
      email: "simran@gmail.com"
    },
    {
      id: 8,
      name: "Arjun",
      email: "arjun@gmail.com"
      }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;
  const startIndex = (currentPage - 1) * usersPerPage;

  const currentUsers = users.slice(
    startIndex,
    startIndex + usersPerPage
  ); 

  return (
    <div className="listing-page">
      <h1>Listing Page</h1>
      <p>All Users</p>

      <button onClick={() => setShowListing(false)}>
        Back to Profile
      </button>

      <div className="users-list">    
      {currentUsers.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        ))}
        </div> 

        <div className="pagination">
        <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        >
          Previous
        </button>

        <span> 
          Page {currentPage} of {Math.ceil(users.length / usersPerPage)} 
        </span>

        <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === Math.ceil(users.length / usersPerPage)}
        >
          Next
        </button>
        </div>
        </div>
  );
}

export default Listing;