import "./Addbus.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Addbus() {
  const [array, setArray] = useState([]);
  const [Category, setCategory] = useState("");
  const [Busno, setBusno] = useState("");
  const [Conductor, setConductor] = useState("");
  useEffect(() => {
    const url = "http://localhost:4000/Busdetails";
    const data = {};
    const header = {};
    console.log(header);
    axios
      .post(url, data, { headers: header })
      .then((res) => {
        console.log(res.data);

        setArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Add=()=>{
    

      const url = "http://localhost:4000/addbus";
      const data = {Busno:Busno,
        Category:Category};
      const header = {};
      console.log(header);
      axios
        .post(url,data, {headers:header})
        .then((res) => {
          console.log(res.data);
         
         let id=res.data.insertId
         localStorage.setItem("uid",id)
         console.log(id)
        }) 
        .catch((err) => {
          console.log(err);
        });
    };
    const save=()=>{
      var uid=localStorage.getItem("uid")
      const url = "http://localhost:4000/addbus";
      const data = {conductorid:Conductor,
        id:uid};
      const header = {};
      console.log(header);
      axios
        .post(url,data, {headers:header})
        .then((res) => {
          console.log(res.data);
         
         let id=res.data.insertId
         localStorage.setItem("uid",id)
         console.log(id)
        }) 
        .catch((err) => {
          console.log(err);
        });
    }
  
  return (
    <>
      <div className="Addbus_container">
        <div className="Addbus_box">
          <div className="Addbus_box_left">
            <div className="Addbus_inner_container_header">
              <div className="Addbus_Back_button">
                <button>Back</button>
              </div>
              <label>Add bus</label>
            </div>
            <div className="Addbus_Left_inner">
              <div className="Addbus_Left_inner_text">
                <label>Bus No</label>
                <input type="text" value={Busno} onChange={(e)=>{setBusno(e.target.value)}}/>
              </div>
              <div className="Addbus_Left_inner_text">
                <label>Category</label>
                <select value={Category} onChange={(e)=>{setCategory(e.target.value)}}>
                  <option>SELECT</option>
                  <option>Ordinary</option>
                  <option>Superfast</option>
                </select>
              </div>
              <div className="Addbus_Left_inner_button">
                <label>Add Stop</label>
                <button>Click</button>
              </div>
              <div className="Addbus_Left_inner_button">
                <button onClick={(e)=>{Add(e)}}>Add</button>
                <button>Update</button>
              </div>
            </div>
          </div>
          <div className="Addbus_box_right">
            <div className="Addbus_inner_box">
              <div className="Addbus_inner_box_row">
                <div className="Addbus_col1">
                  <label>Bus ID</label>
                </div>
                <div className="Addbus_col1">
                  <label>Bus No</label>
                </div>
                <div className="Addbus_col1">
                  <label>Qr Code</label>
                </div>
                <div className="Addbus_col1">
                  <label>Conductor ID</label>
                </div>
                <div className="Addbus_col1">
                  <label>ConductorName</label>
                </div>
                <div className="Addbus_col1">
                  <label>Status</label>
                </div>
              </div>
{array.map((itm,indx)=>{
  return(
    <><div className="Addbus_inner_box_row">
    <div className="Addbus_foot">
      <label>{itm.id}</label>
    </div>
    <div className="Addbus_foot">
      <label>{itm.Busno}</label>
    </div>

    <div className="Addbus_foot">
      <label>Download</label>
    </div>
    <div className="Addbus_foot">
      <input type="text" value={Conductor} onChange={(e)=>{setConductor(e.target.value)}} />
    </div>
    <div className="Addbus_foot">
      <label>Alex</label>
    </div>
    <div className="Addbus_foot1">
      <label onClick={(e)=>{save(e)}}>Save</label>
    </div>
  </div>
    </>
  )
})}
              <div className="Addbus_inner_box_row">
                <div className="Addbus_foot">
                  <label>6541</label>
                </div>
                <div className="Addbus_foot">
                  <label>KL-15-6524</label>
                </div>

                <div className="Addbus_foot">
                  <label>Download</label>
                </div>
                <div className="Addbus_foot">
                  <input type="Addbus_text" />
                </div>
                <div className="Addbus_foot">
                  <label>Alex</label>
                </div>
                <div className="Addbus_foot1">
                  <label>Save</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
