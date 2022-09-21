import SingleUser from "../SingleUser/SingleUser";
import "./MainContainer.css";
import Table from "react-bootstrap/Table";
const MainContainer = ({
  users,
  HandleDelete,
  handleUpdateUserChange,
  handleUpdateUser,
}) => {
  // console.log(users);
  return (
    <div>
      <div className="container">
        <Table className="" striped variant="dark" bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>id</th>
              <th>Fname</th>
              <th>Lname</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <SingleUser
                  handleUpdateUserChange={handleUpdateUserChange}
                  handleUpdateUser={handleUpdateUser}
                  user={user}
                  index={i + 1}
                  HandleDelete={() => {
                    HandleDelete(user.id);
                  }}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default MainContainer;
