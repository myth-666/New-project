import './Userwallet.css'
export default function Userwallet(){
    return(
        <>
         <div className="Userwallet_container">
      <div className="UserwalletHeader"><label>User</label></div>
      <div className="Userwallet_inner_container">
        <div className="Userwallet_box">
        <div className='Userwallet_header'>
            <div><label className='Userwallet_header_label'>Wallet: 0</label>
            <button>Add</button></div>
            <div><button>Sign out</button></div>
        </div>
        <div className='Userwallet_middle'>
            <button>Consession</button>
            <button>Reservstion</button>
            <button>History</button>
        </div>
        <div className='Userwallet_footer'>
            <button>Scan</button>
        </div>
        </div>
      </div>
      </div></>
    )
}