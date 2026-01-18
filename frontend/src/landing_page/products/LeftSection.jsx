import React from 'react'

const LeftSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, Appstore }) => {
    return (
        <div className='container '>
            <div className="row p-5 ">
                <div className="col-6 p-5 ">
                    <img src={imageURL} alt="img" />
                </div>
                <div className="col-2"></div>
                <div className="col-4 " >
                    <h1 style={{paddingTop:"100px", marginBottom:"20px", fontSize:"24px"}}>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        {tryDemo &&(<a href={tryDemo} style={{marginRight:"60px", textDecoration:"none"}}>Try Demo <i class="fa fa-arrow-right" aria-hidden="true" ></i></a>)}
                        {learnMore &&(<a href={learnMore} style={{ textDecoration:"none"}}>Learn more <i class="fa fa-arrow-right" aria-hidden="true" ></i></a>)}
                    </div>
                    <div className='mt-3'>

                        {googlePlay && (<a href={googlePlay} style={{marginRight:"20px", textDecoration:"none"}}><img src="media/images/googlePlayBadge.svg" alt="logo" /></a>)}
                        {Appstore &&(<a href={tryDemo}><img src="media/images/appstoreBadge.svg" alt="logo" /></a>)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftSection
