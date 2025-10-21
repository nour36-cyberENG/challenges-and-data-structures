import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./TeamDetails.css";

export default function TeamDetails(){
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
  // prefer state data passed via Link; accept either `data` or `user` keys
  const user = (location.state && (location.state.data || location.state.user)) || null;

    if(!user){
        return(
        <div className="profile-container">
             <h2>No user data found</h2>
             <p>If you navigated here directly, click below to return to the team list and open a profile from there.</p>
             <button className="back-btn" onClick={()=> navigate("/team")}> 
                Go back to Team
             </button>
        </div>
        );  
    }

    return (
    <div className="profile-container">
      <h1>{user.name}’s Profile</h1>
      <div className="profile-top">
        {user.picture && <img src={user.picture} alt={user.name} className="profile-pic"/>}
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Position:</strong> {user.position}</p>
        <p><strong>Department:</strong> {user.department}</p>
        <p><strong>ID:</strong> {params.id || user.id}</p>
      </div>

      <button className="back-btn" onClick={() => navigate("/team")}> 
        Go back to Team
      </button>
    </div>
  );
};
   

