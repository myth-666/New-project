import "./Addbus.css";

export default function Addbus() {

 
  return (
    <>
      <div className="Details_container">
        
        
          <div className="Details_box">
            <div className="Payment_box_left">
            <div className="Details_inner_container_header">
            <div className="Back_button">
                <button>Back</button>
              </div>
              <label>Add bus</label>
            </div>
            <div className="Left_inner">
                <div className="Left_inner_text"><label>Bus No</label><input type="text" /></div>
                <div className="Left_inner_text"><label>Category</label><select><option>SELECT</option>
                <option>Ordinary</option>
                <option>Superfast</option>
                </select></div>
                <div className="Left_inner_button"><label>Add Stop</label><button>Click</button></div>
                <div className="Left_inner_button"><button>Add</button><button>Update</button></div>
            </div>
            </div>
            <div className="Payment_box_right">
            <div className="Details_inner_box">
              <div className="Details_inner_box_row">
                <div className="col1">
                  <label>Bus ID</label>
                </div>
                <div className="col1">
                  <label>Bus No</label>
                </div>
                <div className="col1">
                  <label>Qr Code</label>
                </div>
                <div className="col1">
                  <label>Conductor ID</label>
                </div>
                <div className="col1">
                  <label>ConductorName</label>
                </div>
                <div className="col1">
                  <label>Status</label>
                </div>
               
               
              </div>
             
           
         
              <div className="Details_inner_box_row">
                <div className="foot">
                  <label>6541</label>
                </div>
                <div className="foot">
                  <label>KL-15-6524</label>
                </div>
            
                <div className="foot">
                  <label>Download</label>
                </div>
                <div className="foot">
                  <input type="text"/>
                </div>
                <div className="foot">
                  <label>Alex</label>
                </div>
                <div className="foot">
                  <label>Save</label>
                </div>
              
                

              </div>
              

              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}