import { useState } from "react";
import "./UserCard.css";

function UserCard({ user }) {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
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
           {likes} 
        </button>
        <button onClick={Email}>
          {showEmail ? "Hide email" : "show email"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;