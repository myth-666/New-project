import './Login.css'
export default function OwnerLogin() {
  return (
    <>
      <div className="App_container">
      <div className="Header"><label>Owner Login</label></div>
      <div className="App_inner_container">
        <div className="App_box">
        <div className='App_row'><label>Username</label>
          <input type='text' /></div>
          <div className='App_row'><label>Password</label>
          <input  type='password'/></div>
          
            <button>Login</button>
            <label className='footer'>abc</label>
        </div>
      </div>
      </div>
    </>
  );
}