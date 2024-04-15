import React from 'react'

const AppleBasket = ({count,basketName}) => {
  return (
    <div className='basket'>
        <h1>{count} Apples</h1>
        <p>{basketName}</p>
    </div>
  )
}

export default AppleBasket