import "./Reservation3.css";
export default function Reservation3() {
  return (
    <>
      <div className="Reservation3_container">
        <div className="Reservation3Header">
          <label>Reservation3</label>
        </div>
        <div className="Reservation3_inner_container">
          <div className="Reservation3_box">
            <div className="Reservation3_box_header">
              <button>Back</button>
            </div>
            <div className="Reservation3_innerbox">
              <div className="Reservation3_row">
                <label>Source</label>
                <select>
                  <option></option>Select<option>Ankamaly</option>
                  <option>Aluva</option>
                  <option>Edappally</option>
                </select>
              </div>
              <div className="Reservation3_row">
                <label>Destination</label>
                <select>
                  <option></option>Select<option>Muvatupuzha</option>
                  <option>Varapuzha</option>
                  <option>Paravoor</option>
                </select>
              </div>
              <div className="Reservation3_row">
                <label>Count</label>
                <select className="Reservation3_row_select">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
              </div>

              <div className="Reservation3_row">
                <label>seat</label>
                <select className="Reservation3_row_select">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  
                </select>
              </div>
              <div className='Reservation3_row'><label>Amount</label>
          <input  type='text' className='Reservation3_row_input'/></div>
              <button>Book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
