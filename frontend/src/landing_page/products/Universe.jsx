import React from 'react'
import UniverseComponent from './UniverseComponent'

const Universe = () => {
  return (
    <div className='container '>
      <div className="row text-center p-5">
        <h1 className=' text-muted'>The Zerodha Universe</h1>
        <p className='text-muted p-3'>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      <div className="row p-5">
        <UniverseComponent image="media/images/zerodhaFundhouse.png" text={<>
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </>}/>

        <UniverseComponent image="media/images/sensibullLogo.svg" text={<>
              Options trading platform that lets you  <br />
              create strategies, analyze positions, and examine  <br />
              data points like open interest, FII/DII, and more.
            </>}/>

        <UniverseComponent image="media/images/tijori.svg" text={<>
              Options trading platform that lets you  <br />
              create strategies, analyze positions, and examine  <br />
              data points like open interest, FII/DII, and more.
            </>}/>
        
      </div>

      <div className="row p-5">
        <UniverseComponent image="media/images/streakLogo.png" text={<>
              Systematic trading platform   <br />
              that allows you to create and backtest   <br />
              strategies without coding.
            </>}/>
        <UniverseComponent image="media/images/smallcaseLogo.png" text={<>
              Systematic trading platform   <br />
              that allows you to create and backtest   <br />
              strategies without coding.
            </>}/>
        <UniverseComponent image="media/images/dittoLogo.png" text={<>
              Personalized advice on life    <br />
              and health insurance. No spam     <br />
              and no mis-selling.
            </>}/>    
      </div>
      <div className="row">
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup</button>
      </div>
      
      
    </div>
  )
}

export default Universe
