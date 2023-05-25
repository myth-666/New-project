import "./viewtrip.css";

export default function viewtrip() {

 
  return (
    <>
      <div className="Details_container">
        
        
          <div className="Details_box">
            <div className="Details_inner_container_header">
              <div className="Back_button">
                <button>Back</button>
              </div>
              <label>View Trip</label>
            </div>
            <div className="Details_inner_box">
              <div className="Details_inner_box_row">
                <div className="col1">
                  <label>Date</label>
                </div>
                <div className="col1">
                  <label>Bus Id</label>
                </div>
                <div className="col1">
                  <label>Trip</label>
                </div>
                <div className="col1">
                  <label>View</label>
                </div>
              
              </div>
             
           
         
              <div className="Details_inner_box_row">
                <div className="foot">
                  <label>04/05/23</label>
                </div>
                <div className="foot">
                  <label>James</label>
                </div>
            
                <div className="foot">
                  <label>Approve</label>
                </div>
                <div className="foot2">
                  <label>Delete</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
