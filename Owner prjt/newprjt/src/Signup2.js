import './Signup2.css'
export default function Signup2() {
  return (
    <>
      <div className="Signup2_container">
      <div className="Signup2Header"><label>Signup</label></div>
      <div className="Signup2_inner_container">
        <div className="Signup2_box">
        <div className='Signup2_row'><label>Username</label>
          <input type='text' /></div>
          <div className='Signup2_row'><label>Name</label>
          <input type='text' /></div>
          <div className='Signup2_row'><label>Email</label>
          <input type='text' /></div>
          
          <div className='Signup2_row'><label>Password</label>
          <input  type='password'/></div>
          <div className='Signup2_row'><label>Confirm Password</label>
          <input  type='password'/></div>
          <div className='Signup2_row'><label>Type</label>
          <select><option></option><option>abc</option><option>abc</option><option>abc</option></select></div>
          
            <button>SignUp</button>
           
        </div>
      </div>
      </div>
    </>
  );
}