import React, {FC, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface ClickCounterProps {
  increment: number
  initialCount: number
}

const ClickCounter: FC<ClickCounterProps> = ({increment, initialCount}) => {
  const [count, setCount] = useState<number>(initialCount);

  return(
      <>
        <p>Button has been clicked: {count} times</p>
        <button onClick={()=> setCount(count + increment)}>
          Click Me
        </button>
        <button onClick={()=> setCount(initialCount)}>
          Reset
        </button>
      </>
  )
}

const element  = (
    <>
      {/* {increment:1, initialCount:10} */}
      <ClickCounter increment={1} initialCount={10}></ClickCounter>
      <ClickCounter increment={2} initialCount={20}></ClickCounter>
      <ClickCounter increment={3} initialCount={30}></ClickCounter>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(element)
