import "./Concession1.css";
export default function Concession1() {
  return (
    <>
      <div className="Concession1_container">
        <div className="Concession1_Header">
          <label>Concession1</label>
        </div>
        <div className="Concession1_inner_container">
          <div className="Concession1_box">
            <div className="Concession1_row">
              <label>First Name</label>
              <select>
                <option></option>Select<option>Ashique</option>
                <option>name</option>
                <option>name</option>
              </select>
            </div>
            <div className="Concession1_row">
              <label>Last Name</label>
              <select>
                <option></option>Select<option>Rahman</option>
                <option>name</option>
                <option>name</option>
              </select>
            </div>
            <div className="Concession1_row">
              <label>Type</label>
              <select className="Concession1_row_select">
                <option></option>
                <option>Student</option>
                <option>Student1</option>
                <option>Student2</option>
                <option>Student3</option>
                <option>Student4</option>
              </select>
            </div>
            <div className="Concession1_row_middle">
            <div className="Concession1_row2">
            <label>KM</label>
            <select>
            
                <option></option>Select<option>10</option>
                <option>20</option>
                <option>30</option>
                <option>10000</option>
              </select> </div>
              <div className="Concession1_row2">
            <label>Days</label>
            <select>
            
                <option></option>Select<option>10</option>
                <option>20</option>
                <option>30</option>
                <option>10000</option>
              </select> </div>
            </div>
            <div className="Concession1_row">
              <label>Travel Count</label>
              <select>
                <option></option>Select<option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="Concession1_row">
              <label>Document front</label>
              <input type="Concession1_file" />
            </div>

            <div className="Concession1_App_row">
              <label>Document Back</label>
              <input type="Concession1_file" />
            </div>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </>
  );
}
