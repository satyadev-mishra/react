import { useState } from "react";
import Style from './Counter.module.css'
const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1 className={Style["text-red"]}>{count}</h1>
        <button className={[Style.btn,Style.textGreen].join(' ')} onClick={()=>{
            setCount(count+1);
        }}>increase Count +</button>
    </div>
  )
}

export default Counter