import './Reservation.css'
export default function Reservation() {
  return (
    <>
      <div className="App_container">
      <div className="Header"><label>Reservation</label></div>
      <div className="App_inner_container">
        <div className="App_box">
            <div className='App_box_header'><button>Back</button></div>
        <div className='App_innerbox'>
        
        <button>Book</button>
            <button>Status</button>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}