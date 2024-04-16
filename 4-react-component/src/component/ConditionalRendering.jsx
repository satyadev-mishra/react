import React from 'react'

const ConditionalRendering = () => {
  return (
    <div>
        {2>0?<h1>Condition is True</h1>:<h1>Condition is False</h1>}
        {2<0?<h1>Condition is True</h1>:<h1>Condition is False</h1>}
        {2>0 && <h1>Both Conditon is True</h1>}
        {2<0 || <h1>One Conditon is True</h1>}
    </div>
  )
}

export default ConditionalRendering