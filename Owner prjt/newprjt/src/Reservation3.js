import "./Reservation3.css";
export default function Reservation3() {
  return (
    <>
      <div className="App_container">
        <div className="Header">
          <label>Reservation3</label>
        </div>
        <div className="App_inner_container">
          <div className="App_box">
            <div className="App_box_header">
              <button>Back</button>
            </div>
            <div className="App_innerbox">
              <div className="App_row">
                <label>Source</label>
                <select>
                  <option></option>Select<option>Ankamaly</option>
                  <option>Aluva</option>
                  <option>Edappally</option>
                </select>
              </div>
              <div className="App_row">
                <label>Destination</label>
                <select>
                  <option></option>Select<option>Muvatupuzha</option>
                  <option>Varapuzha</option>
                  <option>Paravoor</option>
                </select>
              </div>
              <div className="App_row">
                <label>Count</label>
                <select className="App_row_select">
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

              <div className="App_row">
                <label>seat</label>
                <select className="App_row_select">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  
                </select>
              </div>
              <div className='App_row'><label>Amount</label>
          <input  type='text' className='App_row_input'/></div>
              <button>Book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
