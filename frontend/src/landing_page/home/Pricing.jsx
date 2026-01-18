import React from 'react'

const Pricing = () => {
  return (
    
    <div className="container p-5">
      <div className="row px-5">
        <div className="col-6 px-5">
            <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
            <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="/" style={{textDecoration:"none"}}>See Pricing<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
        
        <div className="col-6 text-center">
          <div className="row">
            <div className="col-6 border p-3">
              <h1 className='mb-3'>₹0</h1>
              <p>Free equity delivered and <br />direct mutual funds</p>
            </div>
            <div className="col-6 border p-3">
              <h1 className='mb-3'>20</h1>
              <p>Interday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
