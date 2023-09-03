import React, {FC} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface AnimalConfig {
  name: string
  translation: string
  isDuped?: boolean
}

const animals: AnimalConfig[] = [
  {name: 'dog', translation: 'perro', isDuped: undefined},
  {name: 'cat', translation: 'gato'},
  {name: 'chicken', translation: 'pollo', isDuped: true},
  {name: 'duck', translation: 'pato', isDuped: true},
  {name: 'cow', translation: 'vaca' },
  {name: 'sheep', translation: 'oveja' },
  {name: 'horse', translation: 'caballo' }
]

function AnimalList() {
  return (
      <ul>
        {
          animals
          .filter(({isDuped}) => isDuped)
          .map(({name, translation}) => <AnimalItem name={name} translation={translation}/>)
        }
      </ul>
  )
}


const AnimalItem: FC<{
  name: string
  translation: string
}> = ({name, translation}) =>  <li key={name}>
    {getAnimalLabel(name, translation)}
  </li>


const getAnimalLabel = (name: string, translation: string) => `${name} = ${translation}`

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(<AnimalList />)
