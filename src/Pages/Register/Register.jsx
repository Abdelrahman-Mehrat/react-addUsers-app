import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogUserContext } from "../../Context/LogUserContext";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const { handleRegister, isLogin, checkUsers } = useContext(LogUserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin !== null) {
      navigate("/userprofile");
    }
  }, [isLogin]);

  return (
    <section className="login-section">
      <div className="login-form">
        <h2 className="text-center title mx-auto">Register</h2>
        <div className="form-container">
          <Form
            action=""
            onSubmit={(e) => {
              handleRegister(e, userName, userPassword);
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="register-inputName">UserName</Form.Label>
              <Form.Control
                className={checkUsers ? "mb-3" : "input-error mb-3"}
                type="text"
                id="register-inputName"
                placeholder="Enter userName"
                value={userName}
                onChange={handleChangeName}
              />
              <Form.Label htmlFor="register-inputPassword">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                id="register-inputPassword"
                value={userPassword}
                onChange={handleChangePassword}
              />
              <Form.Text className={checkUsers ? "text-muted" : "text-muted text-error"}>
                {checkUsers ? "We'll never share your information with anyone else." : "this name already used"}
              </Form.Text>
            </Form.Group>
            <Button className="form-btn" type="submit">
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};
export default Register;
