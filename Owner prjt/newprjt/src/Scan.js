import './Scan.css'
import img from './img.avif'
export default function Scan() {
  return (
    <>
      <div className="Scan_container">
      <div className="ScanHeader"><label>Scan</label></div>
      <div className="Scan_inner_container">
        <div className="Scan_box">
        <img src={img}/>
           
        </div>
      </div>
      </div>
    </>
  );
}