import "./Concession1.css";
export default function Concession1() {
  return (
    <>
      <div className="App_container">
        <div className="Header">
          <label>Concession1</label>
        </div>
        <div className="App_inner_container">
          <div className="App_box">
            <div className="App_row">
              <label>First Name</label>
              <select>
                <option></option>Select<option>Ashique</option>
                <option>name</option>
                <option>name</option>
              </select>
            </div>
            <div className="App_row">
              <label>Last Name</label>
              <select>
                <option></option>Select<option>Rahman</option>
                <option>name</option>
                <option>name</option>
              </select>
            </div>
            <div className="App_row">
              <label>Type</label>
              <select className="App_row_select">
                <option></option>
                <option>Student</option>
                <option>Student1</option>
                <option>Student2</option>
                <option>Student3</option>
                <option>Student4</option>
              </select>
            </div>
            <div className="App_row_middle">
            <div className="App_row2">
            <label>KM</label>
            <select>
            
                <option></option>Select<option>10</option>
                <option>20</option>
                <option>30</option>
                <option>10000</option>
              </select> </div>
              <div className="App_row2">
            <label>Days</label>
            <select>
            
                <option></option>Select<option>10</option>
                <option>20</option>
                <option>30</option>
                <option>10000</option>
              </select> </div>
            </div>
            <div className="App_row">
              <label>Travel Count</label>
              <select>
                <option></option>Select<option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="App_row">
              <label>Document front</label>
              <input type="file" />
            </div>

            <div className="App_row">
              <label>Document Back</label>
              <input type="file" />
            </div>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </>
  );
}
