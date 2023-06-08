import { useContext } from "react";
import { LogUserContext } from "../../Context/LogUserContext";
import "./UserProfile.css";
const UserProfile = () => {
  const { registerUser, handleLogOut } = useContext(LogUserContext);
  return (
    <div className="welcome-message">
      <h3>
        Welcome
        <span style={{ color: "rgb(98 7 131)",fontWeight:"bold" }}> {registerUser.name}</span>{" "}
      </h3>
      <button className="form-btn btn" onClick={handleLogOut}>Logout</button>
    </div>
  );
};
export default UserProfile;
