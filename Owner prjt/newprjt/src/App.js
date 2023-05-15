import './App.css'
export default function AdminLogin() {
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
          
            <button>Login</button>
          
        </div>
        </div>
      </div>
    </>
  );
}
