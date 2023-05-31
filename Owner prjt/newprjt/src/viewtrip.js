import "./viewtrip.css";

export default function viewtrip() {

 
  return (
    <>
      <div className="viewtrip_container">
        
        
          <div className="viewtrip_box">
            <div className="viewtrip_inner_container_header">
              <div className="viewtripBack_button">
                <button>Back</button>
              </div>
              <label>View Trip</label>
            </div>
            <div className="viewtrip_inner_box">
              <div className="viewtrip_inner_box_row">
                <div className="viewtripcol1">
                  <label>Date</label>
                </div>
                <div className="viewtripcol1">
                  <label>Bus Id</label>
                </div>
                <div className="viewtripcol1">
                  <label>Trip</label>
                </div>
                <div className="viewtripcol1">
                  <label>View</label>
                </div>
              
              </div>
             
           
         
              <div className="viewtrip_inner_box_row">
                <div className="viewtripfoot">
                  <label>04/05/23</label>
                </div>
                <div className="viewtripfoot">
                  <label>James</label>
                </div>
            
                <div className="viewtripfoot">
                  <label>Approve</label>
                </div>
                <div className="viewtripfoot2">
                  <label>Delete</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
