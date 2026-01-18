import React from 'react'

const Team = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5 text-muted" >
          <h1 className='fs-4 text-center'>People</h1>
        </div>
        <div className="row d-flex " style={{paddingTop:"40px"}}>
          <div className="col " style={{paddingLeft:"80px"}} >
            <img src="media/images/nithinKamath.jpg" style={{borderRadius:"50%", width:"295px" , height:"295px"}} alt="" />
          </div>
          <div className="col">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href="/" style={{textDecoration:"none"}}>Homepage</a> / <a href="/" style={{textDecoration:"none"}}>TradingQnA </a>/ <a href="/" style={{textDecoration:"none"}}>Twitter</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
