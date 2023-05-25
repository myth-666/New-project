import "./Addstop.css";

export default function Addstop() {

 
  return (
    <>
      <div className="Details_container">
        
        
          <div className="Details_box">
            <div className="Payment_box_left">
            <div className="Details_inner_container_header">
              
              <label>Add stop</label>
            </div>
            <div className="Left_inner">
                <div className="Left_inner_text"><label>Stop</label><input type="text" /></div>
                <div className="Left_inner_text"><label>KM</label><input type="text" /></div>
                <div className="Left_inner_button"><button>Add</button><button>Save</button></div>
            </div>
            </div>
            <div className="Payment_box_right">
            <div className="Details_inner_box">
              <div className="Details_inner_box_row">
                <div className="col1">
                  <label>NO</label>
                </div>
                <div className="col1">
                  <label>Stop</label>
                </div>
                <div className="col1">
                  <label>Km</label>
                </div>
               
               
              </div>
             
           
         
              <div className="Details_inner_box_row">
                <div className="foot">
                  <label>0</label>
                </div>
                <div className="foot">
                  <label>Ankamaly</label>
                </div>
            
                <div className="foot">
                  <label>0</label>
                </div>
              
                

              </div>
              

              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}