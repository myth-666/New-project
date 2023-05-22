import "./Admin.css";
import bg from './lovepik-a-driving-bus-background-image_400149197.jpg'
import { useNavigate } from "react-router-dom"; 
export default function Admin() {
  const navigate= useNavigate();
  function hanleClick(){
navigate("/Details")
  }
  return (
    <>
      <div className="Admin_container">
        <div className="Header"><label>Admin</label></div>
        <div className="Admin_inner_container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="Admin_box">
          <div className="Admin_header">
            <button>Sign out</button>
          </div>
          <div className="Admin_row">
            <div className="Admin_inner">
              <div onClick={hanleClick}>Owner Details</div>
              <div>Conductor Details</div>
              <div>User Details</div>
            </div>
            <div className="Admin_inner">
              <div>Owner Payment</div>
              <div>Passenger Wallet</div>
              <div>Fare Table</div>
            </div>
            <div className="Admin_inner">
              <div>Owner Beneficiary</div>
              <div>Consession</div>
              <div style={{backgroundColor:"  rgb(109, 180, 221)"}}></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
