import './App.css'
import {useNavigate} from "react-router-dom"
export default function AdminLogin() {
  const navigate = useNavigate();
  function login(){
navigate("/Admin")
  }
  return (
    <>
      <div className="App_container">
        <div className="Header"><label> Admin Login</label></div>
        <div className="App_inner_container">
        <div className="App_box">
        <div className='App_row'><label>Username</label>
          <input type='text' /></div>
          <div className='App_row'><label>Password</label>
          <input  type='password'/></div>
          
            <button onClick={login}>Login</button>
          
        </div>
        </div>
      </div>
    </>
  );
}
