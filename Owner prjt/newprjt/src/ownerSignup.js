import './Signup.css'
export default function ownerSignup() {
  return (
    <>
      <div className="ownerSignup_container">
        <div className="ownerSignupHeader"><label>  Owner Signup</label></div>
        <div className="ownerSignup_inner_container">
        <div className="ownerSignup_box">
            <div className='ownerSignupInner'>
                <div className='ownerSignupInner_left'>
        <label>Username</label>
          <input type='ownerSignuptext' />
          <label>Name </label>
          <input  type='ownerSignuptext'/>
          </div>
          <div className='ownerSignup_Inner_right'>
          <label>Email</label>
          <input  type='ownerSignuptext'/>
          <label>Password</label>
          <input  type='ownerSignup_password'/>
          </div>
          </div>
            <div className='ownerSignupButton'><button>Login</button></div>
            </div>
        </div>
      </div>
    </>
  );
}