import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=12");
      setUsers(response.data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <div className="cards-container">
        {users.map((user, index) => (
          <UserCard key={`${user.id.value}-${index}`} user={user} />
        ))}
      </div>
      
      <button className="load-more" onClick={fetchUsers}>
        Load more
      </button>
    </div>
  );
}

export default UserList;