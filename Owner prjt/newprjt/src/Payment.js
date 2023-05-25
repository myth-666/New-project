import "./Payment.css";

export default function Payment() {

 
  return (
    <>
      <div className="Details_container">
        
        
          <div className="Details_box">
            <div className="Payment_box_left">
            <div className="Details_inner_container_header">
              <div className="Back_button">
                <button>Back</button>
              </div>
              <label>View Details</label>
            </div>
            <div className="Left_inner">
                <div className="Left_inner_text"><label>Wallet</label><input type="text" /></div>
                <div className="Left_inner_text"><label>Amount</label><input type="text" /></div>
                <div className="Left_inner_button"><button>Request</button></div>
            </div>
            </div>
            <div className="Payment_box_right">
            <div className="Details_inner_box">
              <div className="Details_inner_box_row">
                <div className="col1">
                  <label>Amount</label>
                </div>
                <div className="col1">
                  <label>TransId</label>
                </div>
                <div className="col1">
                  <label>Time</label>
                </div>
                <div className="col1">
                  <label>Status</label>
                </div>
               
              </div>
             
           
         
              <div className="Details_inner_box_row">
                <div className="foot">
                  <label>500</label>
                </div>
                <div className="foot">
                  <label></label>
                </div>
            
                <div className="foot">
                  <label></label>
                </div>
                <div className="foot">
                  <label>Pendind</label>
                </div>
                

              </div>
              

              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}