import React from 'react'
import AppleCounter from './component/AppleCounter'
import Counter from './component/Counter'
import ReactFragment from './component/ReactFragment'
import ChildrenProps from './component/ChildrenProps'
import ConditionalRendering from './component/ConditionalRendering'
const App = () => {
  return (
    <section>
      <Counter />
      <AppleCounter />
      <ReactFragment />
      <ChildrenProps>Rajan Mishra</ChildrenProps>
      <ConditionalRendering/>
    </section>
  );
}

export default App