import './Concession.css'
import { useNavigate } from "react-router-dom"; 
export default function Concession() {
  const navigate=useNavigate();
  function Back(){
    navigate("/Admin")
  }
  return (
    <>
      <div className="Concession_container">
      <div className="Concession_Header"><label>Concession</label></div>
      <div className="Concession_inner_container">
        <div className="Concession_box">
            <div className='Concession_box_header'><button onClick={Back}>Back</button></div>
        <div className='Concession_innerbox'>
        
        <button>Apply</button>
            <button>Status</button>
            </div>
        </div> 
      </div>
      </div>
    </>
  );
}