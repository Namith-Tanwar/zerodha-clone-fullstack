import React from 'react'

const RightSection = ({imageURL, productName, productDescription, learnMore}) => {
  return (
    <div className='container '>
            <div className="row p-5 ">
                
                <div className="col-4 " >
                    <h1 style={{paddingTop:"100px", marginBottom:"20px", fontSize:"24px"}}>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        
                        {learnMore &&(<a href={learnMore} style={{ textDecoration:"none"}}>Learn more <i class="fa fa-arrow-right" aria-hidden="true" ></i></a>)}
                    </div>

                </div>
                <div className="col-2"></div>
                <div className="col-6 p-5 ">
                    <img src={imageURL} alt="img" />
                </div>
            </div>
        </div>
  )
}

export default RightSection
