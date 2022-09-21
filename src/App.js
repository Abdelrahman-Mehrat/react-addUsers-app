// hooks

// react router and bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import NavBarTitle from "./Components/FixedNavBar/NavBarTitle";
import HomePage from "./Components/Pages/HomePage/HomePage";
import ProtectedRoute from "./Components/ProtectedComponent/ProtectedRoute";
import Register from "./Components/Pages/Register/Register";
import UserProfile from "./Components/Pages/Profile/UserProfile";

// style
import "./App.css";
import LoginModal from "./Components/LoiginModal";
import { useContext } from "react";
import { LogUserContext } from "./Components/Context/LogUserContext";
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
