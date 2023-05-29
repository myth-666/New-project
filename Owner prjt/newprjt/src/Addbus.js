import "./Addbus.css";

export default function Addbus() {

 
  return (
    <>
      <div className="Addbus_container">
        
        
          <div className="Addbus_box">
            <div className="Addbus_box_left">
            <div className="Addbus_inner_container_header">
            <div className="Addbus_Back_button">
                <button>Back</button>
              </div>
              <label>Add bus</label>
            </div>
            <div className="Addbus_Left_inner">
                <div className="Addbus_Left_inner_text"><label>Bus No</label><input type="text" /></div>
                <div className="Addbus_Left_inner_text"><label>Category</label><select><option>SELECT</option>
                <option>Ordinary</option>
                <option>Superfast</option>
                </select></div>
                <div className="Addbus_Left_inner_button"><label>Add Stop</label><button>Click</button></div>
                <div className="Addbus_Left_inner_button"><button>Add</button><button>Update</button></div>
            </div>
            </div>
            <div className="Addbus_box_right">
            <div className="Addbus_inner_box">
              <div className="Addbus_inner_box_row">
                <div className="Addbus_col1">
                  <label>Bus ID</label>
                </div>
                <div className="Addbus_col1">
                  <label>Bus No</label>
                </div>
                <div className="Addbus_col1">
                  <label>Qr Code</label>
                </div>
                <div className="Addbus_col1">
                  <label>Conductor ID</label>
                </div>
                <div className="Addbus_col1">
                  <label>ConductorName</label>
                </div>
                <div className="Addbus_col1">
                  <label>Status</label>
                </div>
               
               
              </div>
             
           
         
              <div className="Addbus_inner_box_row">
                <div className="Addbus_foot">
                  <label>6541</label>
                </div>
                <div className="Addbus_foot">
                  <label>KL-15-6524</label>
                </div>
            
                <div className="Addbus_foot">
                  <label>Download</label>
                </div>
                <div className="Addbus_foot">
                  <input type="Addbus_text"/>
                </div>
                <div className="Addbus_foot">
                  <label>Alex</label>
                </div>
                <div className="Addbus_foot">
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