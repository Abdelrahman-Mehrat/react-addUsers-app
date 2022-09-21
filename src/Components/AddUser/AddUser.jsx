import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AddUser.css";
const AddUser = ({ handleAddUser, newUser, handleAddUserChange }) => {
  const [toggleForm, setToggleForm] = useState(false);
  const handleForm = () => {
    setToggleForm(!toggleForm);
    console.log(!toggleForm);
  };
  const { fname, lname, email } = newUser;
  return (
    <div className="container mb-3">
      <div className="switch-userForm-btn ">
        <button
          className={!toggleForm ? "openBtn" : "closeBtn"}
          onClick={handleForm}
        >
          {!toggleForm ? `open form` : `close form`}
        </button>
      </div>
      {toggleForm ? (
        <form action="" onSubmit={handleAddUser} className="userForm mt-4">
          <Row>
            <Col md={6} className="px-3">
              <input
                type="text"
                className="userForm-input"
                placeholder="Fname"
                name="fname"
                value={fname}
                onChange={handleAddUserChange}
              />
            </Col>
            <Col md={6} className="px-3">
              <input
                type="text"
                className="userForm-input"
                placeholder="Lname"
                name="lname"
                value={lname}
                onChange={handleAddUserChange}
              />
            </Col>

            <Col md={6} className="px-3">
              <input
                type="text"
                className="userForm-input"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleAddUserChange}
              />
            </Col>
            <Col md={12}>
              <button className="mx-auto add-user-Btn mt-3">Add User</button>
            </Col>
          </Row>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};
export default AddUser;
