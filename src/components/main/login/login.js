import './login.scss'
import React,{useState} from "react"
import {testUser} from "./loginData"


export function Login() {
    const [username, actualizarUsername] = useState("");
    const [password, actualizarPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [loginClick, setLoginClick] = useState(false);
    const [actButton, setActButton] = useState(false);
  const handleChangeUsername = (e) => {
    checkBtn() 
    actualizarUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    checkBtn()
    actualizarPassword(e.target.value);
  };


  const handleLogIn = (e) => {
    setLoginClick(true)
    if (testUser.username === username & testUser.userpassword===password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function checkBtn(){
    if (username.length>0 && password.length>-1){enableBtn()}else{disableBtn()}
  } 

  function disableBtn() {
    setActButton(true)
  }

  function enableBtn() {
    setActButton(false)
  }

  function goHome(){
    setTimeout(()=>window.location.replace("/store-greco-diego/home"),3000)
    return "Login Success!!!"
  }
  return (
    <div className="login">
        <div className="inputContainer">
          <input
            autoComplete="off"
            value={username}
            onChange={handleChangeUsername}
            placeholder="username"
            name="username"
            type="text"
          />
        </div>
        <div className="inputContainer">
          <input
            autoComplete="off"
            value={password}
            onChange={handleChangePassword}
            placeholder="password"
            name="password"
            type="text"
          />
        </div>
        <button  id="btnLogin" className="btn" onClick={handleLogIn} disabled={actButton} >
          Log in
        </button>

        {loginClick===true?  <div className={`loginmessage ${isValid===true?"correct" : "incorrect"}`}>
          {isValid === true ? goHome():"User o password Incorrect, try again!"}</div>:null}
      </div>
  );
}
