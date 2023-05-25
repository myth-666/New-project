import './Signup.css'
export default function ownerSignup() {
  return (
    <>
      <div className="App_container">
        <div className="Header"><label>  Owner Signup</label></div>
        <div className="App_inner_container">
        <div className="App_box">
            <div className='Inner'>
                <div className='Inner_left'>
        <label>Username</label>
          <input type='text' />
          <label>Name </label>
          <input  type='text'/>
          </div>
          <div className='Inner_right'>
          <label>Email</label>
          <input  type='text'/>
          <label>Password</label>
          <input  type='password'/>
          </div>
          </div>
            <div className='Button'><button>Login</button></div>
            </div>
        </div>
      </div>
    </>
  );
}