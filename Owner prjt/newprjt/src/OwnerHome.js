import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="Home_container">
        <div className="Header"><label>Wallet:0</label><div><button>Sign Out</button></div></div>
        <div className="Home_inner_container">
        <div className="Home_box">
       
          <div className="Home_row">
            <div className="Home_inner">
              <div>Add Bus</div>
              <div>View Trip</div>
              <div>Payment</div>
            </div>
            <div className="Home_inner1">
              <div>Beneficiary</div>
             
            </div>
          
          </div>
        </div>
      </div>
      </div>
    </>
  );
}