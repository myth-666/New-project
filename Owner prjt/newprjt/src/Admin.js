import "./Admin.css";
export default function Admin() {
  return (
    <>
      <div className="Admin_container">
        <div className="Header"><label>Admin</label></div>
        <div className="Admin_inner_container">
        <div className="Admin_box">
          <div className="Admin_header">
            <button>Sign out</button>
          </div>
          <div className="Admin_row">
            <div className="Admin_inner">
              <div>Owner Details</div>
              <div>Conductor Details</div>
              <div>User Details</div>
            </div>
            <div className="Admin_inner">
              <div>Owner Payment</div>
              <div>Passenger Wallet</div>
              <div>Fare Table</div>
            </div>
            <div className="Admin_inner">
              <div>Owner Beneficiary</div>
              <div>Consession</div>
              <div>abc</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
