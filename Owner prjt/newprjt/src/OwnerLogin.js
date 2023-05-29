import './Login.css'
export default function OwnerLogin() {
  return (
    <>
      <div className="OwnerLogin_container">
      <div className="OwnerLoginHeader"><label>Owner Login</label></div>
      <div className="OwnerLogin_inner_container">
        <div className="OwnerLogin_box">
        <div className='OwnerLogin_row'><label>Username</label>
          <input type='OwnerLogintext' /></div>
          <div className='OwnerLogin_row'><label>Password</label>
          <input  type='OwnerLoginpassword'/></div>
          
            <button>Login</button>
            <label className='OwnerLogin_footer'>signup</label>
        </div>
      </div>
      </div>
    </>
  );
}