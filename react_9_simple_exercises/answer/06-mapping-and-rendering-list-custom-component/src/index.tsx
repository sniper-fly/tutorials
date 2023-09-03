import React, {FC} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

type Animal = 'dog'| 'cat'| 'chicken'| 'cow'| 'sheep'| 'horse'

const animals: Animal[] = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

const CustomAnimals: FC = () => {
  return <>
    {
      animals.map((animal) => {
        return <Item key={animal} animal={animal} />
      })
    }
  </>
}
interface ItemProps {
  animal: Animal
}

function Item({animal}: ItemProps){
  const icon = getIcon(animal)
  const name = animal

  return <div className="item-container">{icon} <span className="animal-name">{name}</span></div>
}

function getIcon(animal: Animal){
  switch (animal){
    case "dog":
      return '🐶'
    case "cat":
      return '🐱'
    case "chicken":
      return '🐔'
    case "cow":
      return '🐮'
    case "sheep":
      return '🐑'
    case "horse":
      return '🐴'
  }
}

const element = (
    <div className="root-container">
      <CustomAnimals/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(element)
