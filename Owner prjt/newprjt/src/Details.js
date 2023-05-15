import './Details.css'
export default function Details(){
    return(
        <>
        <div className="Details_container">
        <div className="Header"><label>Owner Details</label></div>
        <div className="Details_inner_container">
            <div className='Details_box'>
            <div className="Details_inner_container_header">
                <div className='Back_button'><button>Back</button></div><label>Owner Details</label>
            </div>
            <div className="Details_inner_box">
                <div className="Details_inner_bpx_col1">
                    <label>Customer ID</label>
                    <label className='Details_inner_bpx_col_footer'>1234</label>
                </div>
                <div className="Details_inner_bpx_col">
                    <label>Name</label>
                    <label className='Details_inner_bpx_col_footer'>abc</label>
                </div>
                <div className="Details_inner_bpx_col">
                    <label>Email</label>
                    <label className='Details_inner_bpx_col_footer'>123@gmail.com</label>
                </div>
                <div className="Details_inner_bpx_col">
                    <label>Status</label>
                    <label className='Details_inner_bpx_col_footer1'>Approve</label>
                </div>
                <div className="Details_inner_bpx_col2">
                    <label >Delete</label>
                    <label className='Details_inner_bpx_col_footer2'>Delete</label>
                </div>
            </div>
            </div>
            </div></div></>
    )
}