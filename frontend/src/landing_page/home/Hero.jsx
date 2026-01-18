import React from 'react'

const Hero = () => {
  return (
    <div className='Container p-5 mb-5'>
      <div className="row text-center">
        <img className='w-full mb-5' src="media/images/homeHero.png" alt='HeroImg' />
        <h1 className='mt-5 mb-4'>Invest in Everything</h1>
        <p className='mb-4'>Online platform to invest in stocks, derivativs, mutual funds and more</p>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup</button>
      </div>
    </div>
  )
}

export default Hero
