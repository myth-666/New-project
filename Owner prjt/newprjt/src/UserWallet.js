import './Userwallet.css'
export default function Userwallet(){
    return(
        <>
         <div className="App_container">
      <div className="Header"><label>User</label></div>
      <div className="App_inner_container">
        <div className="App_box">
        <div className='App_header'>
            <div><label className='App_header_label'>Wallet: 0</label>
            <button>Add</button></div>
            <div><button>Sign out</button></div>
        </div>
        <div className='App_middle'>
            <button>Consession</button>
            <button>Reservstion</button>
            <button>History</button>
        </div>
        <div className='App_footer'>
            <button>Scan</button>
        </div>
        </div>
      </div>
      </div></>
    )
}