import './Scan.css'
import img from './img.avif'
export default function Scan() {
  return (
    <>
      <div className="App_container">
      <div className="Header"><label>Scan</label></div>
      <div className="App_inner_container">
        <div className="App_box">
        <img src={img}/>
           
        </div>
      </div>
      </div>
    </>
  );
}