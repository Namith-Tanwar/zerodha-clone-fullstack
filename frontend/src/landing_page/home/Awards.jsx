import React from 'react'

const Awards = () => {
  return (
      <div className='container'>
        <div className="row">
          <div className='col-6'>
            <img src="media/images/largestBroker.svg" alt="" />
          </div>
          <div className='col-6 mt-3'>
            <h1 className='text-center'><b>Largest Stock Broker in India</b></h1>
            <p className='fs-5'>2 + million Zerodha clients contribute over 15% of all retail order volume in India daily by investing in</p>
            <div className="row mt-5">
              <div className="col-6">
                  <ul>
                    <li>
                      <p>Future and Options</p>
                    </li>
                    <li>
                      <p>Commodity derivatives</p>
                    </li>
                    <li>
                      <p>Currency derivatives</p>
                    </li>
                  </ul>
              </div>
              <div className="col-6 mb-2">
                  <ul>
                    <li>
                      <p>Stocks and IPOs</p>
                    </li>
                    <li>
                      <p>Direct mutual funds</p>
                    </li>
                    <li>
                      <p>Bonds and Govt. Securities</p>
                    </li>
                  </ul>
              </div>

            </div>
          <img style={{width:"90%"}} src="media/images/pressLogos.png" alt="Press logos" className=''/>
          </div>
        </div>

      </div>

  )
}

export default Awards
