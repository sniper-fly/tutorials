import React, {FC} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface Child {
  name: string
  lastName: string
  bloodType: BloodType
}

interface Props {
  name: string
  lastName: string
  bloodType: BloodType
  children: Child[]
}

type Props2 = {
  name: string
  lastName: string
  bloodType: BloodType
}

type BloodType = "A+" | "A-" | "O+"

interface MyComponentProps {
  name: string
  age: number
}

const MyComponent: FC<MyComponentProps> = (props) =>{
  return <div>Hello {props.name}, your age is {props.age}</div>
}

const helloWorldElement = <div className="container">Hello World!</div>

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement as Element)

root.render(helloWorldElement)
