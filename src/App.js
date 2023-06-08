// hooks

// react router and bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import NavBarTitle from "./Components/FixedNavBar/NavBarTitle";
import ProtectedRoute from "./Components/ProtectedComponent/ProtectedRoute";
// style
import "./App.css";
import LoginModal from "./Components/LoiginModal";
import { useContext } from "react";
import { LogUserContext } from "./Context/LogUserContext";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";
import UserProfile from "./Pages/Profile/UserProfile";


function App() {
  const {isLogin} = useContext(LogUserContext); 
  return (
    <BrowserRouter>
      <NavBarTitle />
      {
        isLogin? 
        ""
        :
        <LoginModal/>
      }
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/userprofile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
