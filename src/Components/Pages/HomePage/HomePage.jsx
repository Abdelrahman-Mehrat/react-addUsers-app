import { useEffect, useState } from "react";
import MainContainer from "../../MainContainer/MainContainer";
import AddUser from "../../AddUser/AddUser.jsx";
import Button from 'react-bootstrap/Button';

import "./HomePage.css";
const HomePage = () => {
  const [testId, setTestId] = useState(3);
  const [users, setUsers] = useState([
    {
      id: 1,
      fname: "Leanne ",
      lname: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      fname: " Graham",
      lname: "abdo",
      email: "mail2@april.biz",
    },
  ]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("all-data")) !== null) {
      setUsers(JSON.parse(localStorage.getItem("all-data")));
      setTestId(JSON.parse(localStorage.getItem("newUser-id")));
    }
  }, []);
  const [updateUser, setUpdateUser] = useState(null);
  // add user state
  const [newUser, setNewUser] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
  });

  const HandleDelete = (target) => {
    const newUsers = users.filter((user) => user.id != target);
    setUsers(newUsers);
    localStorage.setItem("all-data", JSON.stringify(newUsers));
  };
  // form add user functions
  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    localStorage.setItem("all-data", JSON.stringify([...users, newUser]));
    // reset input values
    setNewUser({
      id: "",
      fname: "",
      lname: "",
      email: "",
    });
    localStorage.setItem("newUser-id", JSON.stringify(testId+1));
    setTestId(testId + 1);
    console.log(JSON.parse(localStorage.getItem("newUser-id")));
  };
  const handleAddUserChange = (e) => {
    console.log(users[users.length - 1].id);
    setNewUser({
      ...newUser,
      id: testId ,
      [e.target.name]: e.target.value,
    });
  };
  // updated logic
  const handleUpdateUserChange = (e, user) => {
    setUpdateUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleUpdateUser = (event, singleUser) => {
    console.log(updateUser);
    const newState = users.map((user) => {
      if (user.id === singleUser.id && updateUser) {
        return updateUser;
      }
      return user;
    });
    setUsers(newState);
    localStorage.setItem("all-data", JSON.stringify(newState));
    setUpdateUser(null)
  };
  return (
    <div className="homePage-container">
      <AddUser
        handleAddUser={handleAddUser}
        newUser={newUser}
        handleAddUserChange={handleAddUserChange}
      />
      
      <MainContainer
        handleUpdateUserChange={handleUpdateUserChange}
        handleUpdateUser={handleUpdateUser}
        users={users}
        HandleDelete={HandleDelete}
      />
    </div>
  );
};
export default HomePage;
