import './Login2.css'
export default function Login2() {
  return (
    <>
      <div className="Login2_container">
      <div className="Login2_Header"><label>Login</label></div>
      <div className="Login2_inner_container">
        <div className="Login2_box">
        <div className='Login2_row'><label>Username</label>
          <input type='text' /></div>
          <div className='Login2_row'><label>Password</label>
          <input  type='password'/></div>
          
            <button>Login</button>
           <div className='Login2Footer'><label>Sing Up</label></div>
        </div> 
      </div>
      </div>
    </>
  );
}