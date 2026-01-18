import React from 'react'

const Education = () => {
  return (
      <div className='container p-5'>
        <div className="row p-5">
          <div className="col-5 ">
            <img src="media/images/education.svg" alt="ed" style={{width:"95%"}}/>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <h1 className='fs-2 mb-2'>Free and open market education</h1>
            <p className='text-muted '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="/" style={{textDecoration:"none"}}>Varsity <i class="fa fa-arrow-right mb-5" aria-hidden="true" ></i></a>
            
            <p className='text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="/" style={{textDecoration:"none"}}>Trading Q&A <i class="fa fa-arrow-right" aria-hidden="true" ></i></a>
          </div>
        </div>
      </div>
    
  )
}

export default Education
