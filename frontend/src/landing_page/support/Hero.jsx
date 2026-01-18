import React from 'react'

const Hero = () => {
    return (
        <section className='conatainer-fluid text-white' id='supportHero'>
            <div className=" p-5 mt-5 mb-5 " id='supportWrapper'>
                <h3>Support Portal</h3>
                <a href="/" style={{ color: "white" }}>Track Tickets</a>
            </div>
            <div className="row d-flex" id='supportWrapper' style={{paddingBottom:"40px", paddingRight:"75px"}}>
                <div className="col">
                    <h1 className='fs-5'>Search for an answer or browse help topics <br />
                        to create a ticket</h1>
                    <input style={{width:"500px", height:"75px", margin:"10px 0px"}} type="text" className='rounded' placeholder='Eg: how do i activate F&O, why is my order getting rejected..' /> <br />
                    <a href="/" style={{color:"white" ,paddingRight:"15px"}}>Track account opening</a>
                    <a href="/" style={{color:"white" ,paddingRight:"15px"}}>Track segment activation</a>
                    <a href="/" style={{color:"white" ,paddingRight:"15px"}}>Intraday margins</a>
                    <a href="/" style={{color:"white" ,paddingRight:"15px"}}>Kite user manual</a>
                </div>
                <div className="col">
                    <h1>Featured</h1>
                    <ol>
                        <li><a href="/"style={{color:"white" ,paddingRight:"15px"}}>Current Takeovers and Delisting – January 2024</a></li>
                        <li><a href="/"style={{color:"white" ,paddingRight:"15px"}}>Latest Intraday leverages – MIS & CO</a></li>
                    </ol>
                </div>
            </div>

        </section>
    )
}

export default Hero
