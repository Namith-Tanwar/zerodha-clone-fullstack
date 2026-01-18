import React from 'react'

const Hero = () => {
    return (
        <div className='text-center  d-flex flex-column border-bottom' style={{ padding: "100px", fontSize: "30px" }}>
            <p>Zerodha Products</p>
            <div className='text-muted fs-5'>
                <p>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href="/" style={{ textDecoration: "none" }}>investment offerings <i class="fa fa-arrow-right" aria-hidden="true" ></i></a> </p>
            </div>

        </div>
    )
}

export default Hero
