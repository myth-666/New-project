import "./Details.css";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
export default function Details() {
  const [array, setArray] = useState([]);
  const  navigate = useNavigate();
  const Delete = (e, id) => {
    // const temp = [...array];
    // temp.splice(indx, 1);
    // setArray(temp);
    const url = "http://localhost:4000/Delete";
    const data = {id:id};
    const header = {};
    console.log(header);
    axios
      .post(url,data, {headers:header})
      .then((res) => {
        console.log(res.data);

       
      }) 
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    const url = "http://localhost:4000/ownerdetails";
    const data = {};
    const header = {
      
    };
    console.log(header);
    axios
      .post(url,data, {headers:header})
      .then((res) => {
        console.log(res.data);

        setArray(res.data);
      })
      .catch((err) => {
        console.log(err); 
      });
  },[])
  function Back(){
    navigate("/")
  }
  return (
    <>
      <div className="Details_container">
        <div className="Header">
          <label>Owner Details</label>
        </div>
        <div className="Details_inner_container">
          <div className="Details_box">
            <div className="Details_inner_container_header">
              <div className="Back_button">
                <button onClick={Back}>Back</button>
              </div>
              <label>Owner Details</label>
            </div>
            <div className="Details_inner_box">
              <div className="Details_inner_box_row">
                <div className="col1">
                  <label>Customer ID</label>
                </div>
                <div className="col1">
                  <label>Name</label>
                </div>
                <div className="col1">
                  <label>Email</label>
                </div>
                <div className="col1">
                  <label>Status</label>
                </div>
                <div className="col1">
                  <label>Delete</label>
                </div>
              </div>
             
              {array.map((itm, indx) => {
        return (
          <>
               <div className="Details_inner_box_row">
                <div className="foot">
                  <label>{itm.ownerid}</label>
                </div>
                <div className="foot">
                  <label>{itm.Name}</label>
                </div>
                <div className="foot">
                  <label>{itm.email}</label>
                </div>
                <div className="foot1">
                  <label >Approve</label>
                </div>
                <div className="foot2">
                  <label onClick={(e)=>{Delete(e,itm.ownerid)}}>Delete</label>
                </div>
              </div>
          </>
        );
      })}
              <div className="Details_inner_box_row">
                <div className="foot">
                  <label>123</label>
                </div>
                <div className="foot">
                  <label>James</label>
                </div>
                <div className="foot">
                  <label>1234@gmail.com</label>
                </div>
                <div className="foot1">
                  <label>Approve</label>
                </div>
                <div className="foot2">
                  <label>Delete</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
