import React from 'react'
import '../components/RidePopUp.scss'

const RidePopUp = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
          props.setRidePopupPanel(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3 '>
                <img className='h-12 rounded-full object-cover w-12 ' src="https://as1.ftcdn.net/jpg/05/87/99/44/1000_F_587994464_vPR0INUhG3k0ixKEMPb4EmAhOQPST9BM.jpg" alt="" />
                <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname }</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>
       <div className="flex gap-2 justify-between flex-col items-center">
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className='text-balance font-medium'>Pickup Add...</h3>
            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
          </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className='text-balance font-medium'>Destination Add...</h3>
            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
          </div>
          </div> 
        <div className='flex items-center gap-5 p-3 '> 
          <i className="ri-currency-line"></i>
          <div>
            <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
          </div>
          </div>
       </div>
     <div className='flex mt-5 w-full items-center justify-between'>
     <button onClick={()=>{
        props.setRidePopupPanel(false)
       }} className='ignore-btn'>Ignore</button>
    
     <button onClick={()=>{
       props.setConfirmRidePopupPanel(true)
       props.confirmRide()
       }} className='accept-btn'>Accept</button>
    
      
     </div>
       </div>
    </div>
  )
}

export default RidePopUp


