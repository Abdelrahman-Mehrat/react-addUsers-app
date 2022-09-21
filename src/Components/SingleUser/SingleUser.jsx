import { useContext, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiChatDeleteLine } from "react-icons/ri";
import { Button } from "react-bootstrap";
import "./SingleUser.css";
import { LogUserContext } from "../Context/LogUserContext";
const SingleUser = ({
  user,
  HandleDelete,
  index,
  id,
  handleUpdateUserChange,
  handleUpdateUser,
}) => {
  const {isLogin} = useContext(LogUserContext)
  console.log(isLogin);
  const [toggleUpdate, setToggleUpdate] = useState(true);
  return (
    <tr id={user.id}>
      <td>{index}</td>
      <td>{user.id}</td>
      <td>
        {toggleUpdate ? (
          user.fname
        ) : (
          <input
            defaultValue={user.fname}
            name="fname"
            onChange={(e) => {
              handleUpdateUserChange(e, user);
            }}
          />
        )}
      </td>
      <td>
        {toggleUpdate ? (
          user.lname
        ) : (
          <input
            defaultValue={user.lname}
            name="lname"
            onChange={(e) => {
              handleUpdateUserChange(e, user);
            }}
          />
        )}
      </td>
      <td>
        {toggleUpdate ? (
          user.email
        ) : (
          <input
            defaultValue={user.email}
            name="email"
            onChange={(e) => {
              handleUpdateUserChange(e, user);
            }}
          />
        )}
      </td>
      <td>
       
        {" "}
        {!toggleUpdate ? (
          isLogin?
          <Button
            className="mx-auto d-block"
            onClick={(e) => {
              handleUpdateUser(e, user);
              setToggleUpdate(!toggleUpdate);
            }}
          >
            Save
          </Button>
          :""
        ) : (
          isLogin?
          <Button
            className="mx-auto d-block"
            onClick={() => {
              setToggleUpdate(!toggleUpdate);
            }}
          >
            <AiFillEdit />
          </Button>
          :""
        )}
      </td>
      <td>
        {
            isLogin?
        <Button className="mx-auto d-block" onClick={HandleDelete}>
          <RiChatDeleteLine />
        </Button>
            :
""
        }
      </td>
    </tr>
  );
};
export default SingleUser;
