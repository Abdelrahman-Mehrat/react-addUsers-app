import { useContext } from "react";
import { LogUserContext } from "../../Context/LogUserContext";
import "./UserProfile.css";
const UserProfile = () => {
  const { registerUser, handleLogOut } = useContext(LogUserContext);
  return (
    <div className="container">
      <h3>
        Welcome
        <span style={{ color: "#00ff58" }}> {registerUser.name}</span>{" "}
      </h3>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
export default UserProfile;
