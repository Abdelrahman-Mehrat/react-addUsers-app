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
        {
          users.length>0 ?(
            <Table className="" striped variant="dark" bordered hover>
            <thead>
              <tr>
                <th style={{width:"50px"}}>#</th>
                <th style={{width:"50px"}}>id</th>
                <th style={{width:"250px"}}>Fname</th>
                <th style={{width:"250px"}}>Lname</th>
                <th style={{width:"250px"}}>Email</th>
                <th style={{width:"100px"}}></th>
                <th style={{width:"100px"}}></th>
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
  ):
  <div className="no-users-message">Add some users</div>
        }
      
      </div>
    </div>
  );
};
export default MainContainer;
