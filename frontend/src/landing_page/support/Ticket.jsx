import React from 'react'

const Ticket = () => {
    return (
        <div className='container' style={{ padding: "40px 20px" }}>
            <h1 style={{ paddingBottom: "32px", fontSize: "28px" }}>
              To create Ticket,select relevant topics
            </h1>

            <div className="row">
                
                <div className="col">
                    <h4 style={{ fontSize: "20px", paddingBottom: "25px" }}>
                      <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
                    </h4>

                    <ul className="list-unstyled mt-3 d-flex flex-column gap-3">
                        <li><a href="/" style={{ textDecoration: "none" }}>Online Account Opening</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Offline Account Opening</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Company, Partnership and HUF Account Opening</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>NRI Account Opening</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Charges at Zerodha</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Getting Started</a></li>
                    </ul>
                </div>


                <div className="col">
                    <h4 style={{ fontSize: "20px", paddingBottom: "25px" }}>
                      <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
                    </h4>

                    <ul className="list-unstyled mt-3 d-flex flex-column gap-3">
                        <li><a href="/" style={{ textDecoration: "none" }}>Login Credentials</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Account Modification and Segment Addition</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>DP ID and bank details</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Your Profile</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Transfer and conversion of shares</a></li>
                    </ul>
                </div>


                <div className="col">
                    <h4 style={{ fontSize: "20px", paddingBottom: "25px" }}>
                      <i className="fa fa-bar-chart" aria-hidden="true"></i> Your Zerodha Account
                    </h4>

                    <ul className="list-unstyled mt-3 d-flex flex-column gap-3">
                        <li><a href="/" style={{ textDecoration: "none" }}>Margin/Leverage, Product and Order types</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Kite Web and Mobile</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Trading FAQs</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Corporate Actions</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Sentinel</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Kite API</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Pi and other platforms</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>Stockreports+</a></li>
                        <li><a href="/" style={{ textDecoration: "none" }}>GTT</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Ticket
