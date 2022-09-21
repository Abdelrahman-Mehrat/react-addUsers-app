import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Link } from 'react-router-dom';
const LoginModal= ()=>{
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const RegisterLink= {
        color: "#ecff35",
    fontWeight: "bold",
    borderRadius: "10px",
    textDecoration: "none",
    backgroundColor: "#607d8b",
    padding: "10px"
    }
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hi!</Modal.Title>
        </Modal.Header>
        <Modal.Body>If you want to modify user in the table <br/> Register please</Modal.Body>
        <Modal.Footer>
     
        <Link style={RegisterLink} to="/register"  onClick={handleClose}>Register</Link>
        </Modal.Footer>
      </Modal>
    )
}
export default LoginModal;