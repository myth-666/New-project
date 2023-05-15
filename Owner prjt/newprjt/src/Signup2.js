import './Signup2.css'
export default function Signup2() {
  return (
    <>
      <div className="App_container">
      <div className="Header"><label>Signup</label></div>
      <div className="App_inner_container">
        <div className="App_box">
        <div className='App_row'><label>Username</label>
          <input type='text' /></div>
          <div className='App_row'><label>Name</label>
          <input type='text' /></div>
          <div className='App_row'><label>Email</label>
          <input type='text' /></div>
          
          <div className='App_row'><label>Password</label>
          <input  type='password'/></div>
          <div className='App_row'><label>Confirm Password</label>
          <input  type='password'/></div>
          <div className='App_row'><label>Type</label>
          <select><option></option><option>abc</option><option>abc</option><option>abc</option></select></div>
          
            <button>SignUp</button>
           
        </div>
      </div>
      </div>
    </>
  );
}