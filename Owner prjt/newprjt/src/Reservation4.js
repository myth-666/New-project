import "./Reservation4.css";
export default function Reservation4() {
  return (
    <>
      <div className="Reservation4_container">
        <div className="Reservation4Header">
          <label>Reservation4</label>
        </div>
        <div className="Reservation4_inner_container">
          <div className="Reservation4_box">
            <div className="Reservation4_box_header">
              <button>Back</button>
            </div>
            <div className="Reservation4_innerbox">
              <div className="Reservation4Col1">
                <label>Ticket Id</label>
                <label className="Reservation4col1footer">2352</label>
              </div>
              <div className="Reservation4Col1">
                <label>Source</label>
                <label className="Reservation4col1footer">Ankamaly</label>
              </div>
              <div className="Reservation4Col1">
                <label>Destination</label>
                <label className="Reservation4col1footer">Muvatupuzha</label>
              </div>
              <div className="Reservation4Col1">
                <label>Seat No</label>
                <label className="Reservation4col1footer">4</label>
              </div>
              <div className="Reservation4Col1">
                <label>Count</label>
                <label className="Reservation4col1footer">1</label>
              </div>
              <div className="Reservation4Col1">
                <label>Time</label>
                <label className="Reservation4col1footer">abc</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
