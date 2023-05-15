import "./Reservation4.css";
export default function Reservation4() {
  return (
    <>
      <div className="App_container">
        <div className="Header">
          <label>Reservation4</label>
        </div>
        <div className="App_inner_container">
          <div className="App_box">
            <div className="App_box_header">
              <button>Back</button>
            </div>
            <div className="App_innerbox">
              <div className="Col1">
                <label>Ticket Id</label>
                <label className="col1footer">2352</label>
              </div>
              <div className="Col1">
                <label>Source</label>
                <label className="col1footer">Ankamaly</label>
              </div>
              <div className="Col1">
                <label>Destination</label>
                <label className="col1footer">Muvatupuzha</label>
              </div>
              <div className="Col1">
                <label>Seat No</label>
                <label className="col1footer">4</label>
              </div>
              <div className="Col1">
                <label>Count</label>
                <label className="col1footer">1</label>
              </div>
              <div className="Col1">
                <label>Time</label>
                <label className="col1footer">abc</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
