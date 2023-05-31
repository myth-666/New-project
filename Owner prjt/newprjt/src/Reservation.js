import './Reservation.css'
export default function Reservation() {
  return (
    <>
      <div className="Reservation_container">
      <div className="ReservationHeader"><label>Reservation</label></div>
      <div className="Reservation_inner_container">
        <div className="Reservation_box">
            <div className='Reservation_box_header'><button>Back</button></div>
        <div className='Reservation_innerbox'>
        
        <button>Book</button>
            <button>Status</button>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}