import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
        <div className="row text-center" style={{padding:"100px"}}>
            <h1 className="mb-3" style={{fontSize:"28px"}}>Charges</h1>
            <p className='text-muted' style={{fontSize:"20px"}}>List of all charges and taxes</p>
        </div>
        <div className="row text-center align-items-center d-flex gap-3" style={{padding:"80px 0px", margin:"0px 81px"}}>
          <div className="col">
            <img src="media/images/pricing0.svg" alt="" />
            <h1 style={{fontSize:"28px"}}>Free equity delivery</h1>
            <p className='text-muted' style={{fontSize:"20px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>

          <div className="col">
            <img src="media/images/other-trades.svg" alt="" />
            <h1 style={{fontSize:"28px"}}>Free equity delivery</h1>
            <p className='text-muted' style={{fontSize:"20px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col">
            <img src="media/images/pricing0.svg" alt="" />
            <h1 style={{fontSize:"28px"}}>Free direct MF</h1>
            <p className='text-muted' style={{fontSize:"20px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      
    </div>
  )
}

export default Hero
