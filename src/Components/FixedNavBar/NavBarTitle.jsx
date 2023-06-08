import "./NavBarTitle.css";
import { useContext, useEffect } from "react";
import { LogUserContext } from "../../Context/LogUserContext";
import { AiOutlineUser } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBarTitle = () => {
  const { name,registerUser,isLogin } = useContext(LogUserContext);
  
  return (
    <>
      <div className="fixed-nav">
        <div className="container py-3  d-flex justify-content-between">
          <h3 className="">Add Users </h3>
          <div className="user-info">
            <AiOutlineUser />
            {registerUser.name}
          </div>
        </div>
      </div>
      <Nav className="bg-dark secondary-nav">
        <NavLink className="p-2 link mx-1" to={"/"}>
          home
        </NavLink>
        <NavLink className={`p-2 link mx-1 ${!isLogin && "disabled"}`} to={"/userprofile"}>
          Your profile
        </NavLink>
        <NavLink className={`p-2 link mx-1 ${isLogin && "disabled"}`} to={"/register"}>
          Register
        </NavLink>
      </Nav>
    </>
  );
};
export default NavBarTitle;
