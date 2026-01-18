import React from 'react'

const UniverseComponent = ({ image, text }) => {
  return (
    <div className="col d-flex flex-column gap-2 align-items-center text-center">
      <img src={image} alt="universe-item" style={{ width: "198px", height: "55px", marginBottom:"16px"}} />

      <span className="text-muted" style={{ fontSize: "12px" }}>
        {text}
      </span>
    </div>
  )
}

export default UniverseComponent
