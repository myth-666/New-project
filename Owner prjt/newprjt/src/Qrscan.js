import './Qrscan.css'
export default function Qrscan() {
  return (
    <>
      <div className="Qrscan_container">
      <div className="QrscanHeader"><label>Qrscan</label></div>
      <div className="Qrscan_inner_container">
        <div className="Qrscan_box">
            <div className='Qrscan_box_header'><button>Back</button></div>
        <div className='Qrscan_innerbox'>
        <div className='Qrscan_row'><label>Source</label>
        <select><option></option>Select<option>Ankamaly</option><option>Aluva</option><option>Edappally</option></select></div>
          <div className='Qrscan_row'><label>Destination</label>
          <select><option></option>Select<option>Muvatupuzha</option><option>Varapuzha</option><option>Paravoor</option></select></div>
          <div className='Qrscan_row'><label>Count</label>
          <select className='Qrscan_row_select'><option></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option></select></div>
          
          <div className='Qrscan_row'><label>Amount</label>
          <input  type='text' className='Qrscan_row_input'/></div>
          
           
            <button>Pay</button>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}