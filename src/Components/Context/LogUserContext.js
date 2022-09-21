import { createContext, useContext, useState, useEffect } from "react";
export const LogUserContext = createContext();
export const LogProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState({});
  const [allRegisterUsers , setAllRegisterUsers] = useState([]);
  const [checkUsers,setCheckUsers] = useState(true);
  // check login
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
   
    if (JSON.parse(localStorage.getItem("isLogin")) !== null) {
      setIsLogin(JSON.parse(localStorage.getItem("isLogin")));
      setRegisterUser(JSON.parse(localStorage.getItem("registerUser")));
    }
  }, []);
useEffect(()=>{
  if(allRegisterUsers!=[]){
    localStorage.setItem("registerUsers",JSON.stringify(allRegisterUsers));

  }
},[allRegisterUsers])
  const handleRegister = (e, name, pass) => {
    e.preventDefault();
    const checkRegisterUser = JSON.parse(localStorage.getItem("registerUsers"));
    const checkuser =  checkRegisterUser.some(singleUser => {
      return name == singleUser.name
    });
    if(!checkuser || !checkRegisterUser.length){
    setCheckUsers(true);
    setIsLogin(true);
    localStorage.setItem("isLogin", JSON.stringify(true));
    console.log(checkuser);
      setRegisterUser({ name: name, password: pass });
      localStorage.setItem("registerUser", JSON.stringify({ name: name, password: pass }));
      setAllRegisterUsers(current=> [...current, {name: name, password: pass} ])
      console.log("out");
    }else{
      console.log("hereee");
      setCheckUsers(false);
    }
  };
  // logOut function
  const handleLogOut = () => {
    setIsLogin(null);
    setRegisterUser({name:"User",password:""});
    localStorage.setItem("isLogin", JSON.stringify(null));
    localStorage.setItem("isLoginUserName", JSON.stringify("unknown"));
    localStorage.setItem("registerUser", JSON.stringify({ }));
  };
  return (
    <LogUserContext.Provider
      value={{  handleRegister, isLogin, handleLogOut,checkUsers,registerUser }}
    >
      {children}
    </LogUserContext.Provider>
  );
};
export const UseNameValue = () => {
  return useContext(LogProvider);
};
