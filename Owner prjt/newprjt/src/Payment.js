import "./Payment.css";
import { useNavigate } from "react-router-dom";
export default function Payment() {
const navigate = useNavigate();
function back(){
  navigate("/Admin")
}
 
  return (
    <>
      <div className="Payment_container">
        
        
          <div className="Payment_box">
            <div className="Payment_box_left">
            <div className="Payment_inner_container_header">
              <div className="PaymentBack_button">
                <button onClick={back}>Back</button>
              </div>
              <label>View Details</label>
            </div>
            <div className="Payment_Left_inner">
                <div className="Payment_Left_inner_text"><label>Wallet</label><input type="text" /></div>
                <div className="Payment_Left_inner_text"><label>Amount</label><input type="text" /></div>
                <div className="Payment_Left_inner_button"><button>Request</button></div>
            </div>
            </div>
            <div className="Payment_box_right">
            <div className="Payment_inner_box">
              <div className="Payment_inner_box_row">
                <div className="Paymentcol1">
                  <label>Amount</label>
                </div>
                <div className="Paymentcol1">
                  <label>TransId</label>
                </div>
                <div className="Paymentcol1">
                  <label>Time</label>
                </div>
                <div className="Paymentcol1">
                  <label>Status</label>
                </div>
               
              </div>
             
           
         
              <div className="Payment_inner_box_row">
                <div className="Paymentfoot">
                  <label>500</label>
                </div>
                <div className="Paymentfoot">
                  <label></label>
                </div>
            
                <div className="Paymentfoot">
                  <label></label>
                </div>
                <div className="Paymentfoot">
                  <label>Pending</label>
                </div>
                

              </div>
              

              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}