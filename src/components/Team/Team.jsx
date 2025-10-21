import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./Team.css";

function Team() {
  const [users, setUsers] = useState([]);
  const [resultsCount, setResultsCount] = useState(12);

  const fetchUsers = useCallback(async (count = resultsCount) => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
      setUsers(response.data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [resultsCount]);

  const loadMoreUsers = async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${resultsCount}`);
      setUsers(prevUsers => [...prevUsers, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching more users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleResultsChange = (e) => {
    const count = parseInt(e.target.value);
    setResultsCount(count);
    fetchUsers(count);
  };

  return (
    <div className="team-page">
      <div className="controls">
        <label>
             List the results:
          <select value={resultsCount} onChange={handleResultsChange}>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>

      <div className="cards-container">
        {users.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
      
      <button className="load-more" onClick={loadMoreUsers}>
        load more
           </button>
    </div>
  );
}

export default Team;