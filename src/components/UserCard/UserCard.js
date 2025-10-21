import { useState } from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

function UserCard({ user }) {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);

    try {
      localStorage.setItem(`user-${user.login.uuid}-likes`, String(newLikes));

      const stored = localStorage.getItem('likedUsers');
      const arr = stored ? JSON.parse(stored) : [];
      const exists = arr.find(u => u.login && u.login.uuid === user.login.uuid);
      if (!exists) {
        arr.push(user);
        localStorage.setItem('likedUsers', JSON.stringify(arr));
      }
    } catch (e) {
      console.error('Error saving like to localStorage', e);
    }
  };

  const Email = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="user-card">
      <img src={user.picture.large} alt={user.name.first} />
  <h3>{`${user.name.first} ${user.name.last}`}</h3>
      
      {showEmail && <p className="email">{user.email}</p>}
      
      <div className="card-actions">
        
        <button onClick={handleLike}>
           👍 {likes}
        </button>
        <button onClick={Email}>
          {showEmail ? "Hide email" : "show email"}
        </button>
        <Link
          to={`/team/${user.login.uuid}`}
          state={{ user: {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            phone: user.phone,
            address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
            position: user.job || "Member",
            department: user.department || "Engineering",
            picture: user.picture.large,
            id: user.login.uuid,
            original: user
          } }}
          className="view-profile-link"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default UserCard;