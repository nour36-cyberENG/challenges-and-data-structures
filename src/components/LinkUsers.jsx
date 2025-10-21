import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/LinkUsers.css";

function LikedUsers() {
  const [likedUsers, setLikedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadLikedUsers = () => {
      try {
        const storedUsers = localStorage.getItem('likedUsers');
        if (storedUsers) {
          const users = JSON.parse(storedUsers);
    
          const usersWithLikes = users.map(user => {
            const likes = localStorage.getItem(`user-${user.login.uuid}-likes`) || '0';
            return { ...user, likes: parseInt(likes) };
          });
          setLikedUsers(usersWithLikes);
        }
      } catch (error) {
        console.error('Error loading liked users:', error);
      }
    };

    loadLikedUsers();
  }, []);
  const handleUnlike = (userUuid) => {
    try {
      const updatedUsers = likedUsers.filter(user => user.login.uuid !== userUuid);
      setLikedUsers(updatedUsers);
      
      localStorage.setItem('likedUsers', JSON.stringify(updatedUsers));
    
      localStorage.removeItem(`user-${userUuid}-likes`);
      
    } catch (error) {
      console.error('Error unliking user:', error);
    }
  };
  const clearAllLikes = () => {
    if (window.confirm('Are you sure you want to remove all likes?')) {
      setLikedUsers([]);
      localStorage.removeItem('likedUsers');

    }
  };

  if (likedUsers.length === 0) {
    return (
      <div className="liked-users-container">
        <div className="liked-users-header">
          <h1>❤️ Liked Users</h1>
          <Link to="/team" className="back-link">← Back to Team</Link>
        </div>
        
        <div className="empty-state">
          <div className="empty-icon">💔</div>
          <h2>No Liked Users Yet</h2>
          <p>You haven't liked any users yet. Start exploring the team page!</p>
          <button 
            onClick={() => navigate('/team')}
            className="explore-btn"
          >
            Explore Team Members
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="liked-users-container">
      <div className="liked-users-header">
        <div className="header-content">
          <h1>❤️ Liked Users ({likedUsers.length})</h1>
          <p>Users you've shown interest in</p>
        </div>
        <div className="header-actions">
          <Link to="/team" className="back-link">← Back to Team</Link>
          <button 
            onClick={clearAllLikes}
            className="clear-all-btn"
            title="Remove all likes"
          >
            🗑️ Clear All
          </button>
        </div>
      </div>

      <div className="liked-users-grid">
        {likedUsers.map((user) => (
          <div key={user.login.uuid} className="liked-user-card">
            <div className="user-avatar">
              <img src={user.picture.large} alt={user.name.first} />
              <div className="like-count">👍 {user.likes}</div>
            </div>
            
            <div className="user-info">
              <h3>{`${user.name.first} ${user.name.last}`}</h3>
              <p className="user-email">{user.email}</p>
              <p className="user-location">
                {user.location.city}, {user.location.country}
              </p>
            </div>

            <div className="user-actions">
              <Link 
                to={`/team/${user.login.uuid}`}
                state={{ user }}
                className="view-profile-btn"
              >
                👁️ View Profile
              </Link>
              
              <button 
                onClick={() => handleUnlike(user.login.uuid)}
                className="unlike-btn"
                title="Remove like"
              >
                💔 Unlike
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="liked-users-footer">
        <p>Total liked users: <strong>{likedUsers.length}</strong></p>
        <Link to="/team" className="discover-more-link">
          Discover more team members →
        </Link>
      </div>
    </div>
  );
}

export default LikedUsers;