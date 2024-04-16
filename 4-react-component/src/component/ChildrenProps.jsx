import React from 'react'

const ChildrenProps = (props) => {
    const {children:name} = props;
  return (
    <div>
        <h1 className='btn'>{props.children}</h1>
        <h1>{name}</h1>
    </div>
  )
}

export default ChildrenProps