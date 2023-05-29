import "./Addstop.css";

export default function Addstop() {

 
  return (
    <>
      <div className="Addstop_container">
        
        
          <div className="Addstop_box">
            <div className="Addstop_box_left">
            <div className="Addstop_inner_container_header">
              
              <label>Add stop</label>
            </div>
            <div className="Addstop_Left_inner">
                <div className="Addstop_Left_inner_text"><label>Stop</label><input type="text" /></div>
                <div className="Addstop_Left_inner_text"><label>KM</label><input type="text" /></div>
                <div className="Addstop_Left_inner_button"><button>Add</button><button>Save</button></div>
            </div>
            </div>
            <div className="Addstop_box_right">
            <div className="Addstop_inner_box">
              <div className="Addstop_inner_box_row">
                <div className="Addstop_col1">
                  <label>NO</label>
                </div>
                <div className="Addstop_col1">
                  <label>Stop</label>
                </div>
                <div className="Addstop_col1">
                  <label>Km</label>
                </div>
               
               
              </div>
             
           
         
              <div className="Addstop_inner_box_row">
                <div className="Addstop_foot">
                  <label>0</label>
                </div>
                <div className="Addstop_foot">
                  <label>Ankamaly</label>
                </div>
            
                <div className="Addstop_foot">
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