import React, {FC} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


interface DividerProps {
  margin?: number // optional != required
}

const Divider: FC<DividerProps> = ({margin = 5 }) => {
  return <div style={
    {
      marginTop: margin,
      marginBottom:margin
    }
  }></div>
}


interface ButtonConfig {
  key: number
  id: string
  color: string
}

type CustomButtonProps = Pick<ButtonConfig, 'id' | 'color'>

function CustomButton({id, color}: CustomButtonProps){
  return (
      <button style={{
        backgroundColor: color,
        width: 150,
        height: 60,
        cursor: "pointer"
      }}  onClick={showAlert}>
        Button {id}
      </button>
  )

  function showAlert () {
    alert(`You clicked on Button ${id}`)
  }
}
/*
const buttonGroup = (
    <div className="container">
      <CustomButton id={"1"}></CustomButton>
      <CustomButton id="2"/>
      <CustomButton id="3"/>
    </div>
)
*/



const buttonConfig: ButtonConfig[] = [
  {
    id: "1",
    key: 1,
    color: 'green'
  },
  {
    id: "2",
    key: 2,
    color: 'white'
  }, {
    id: "3",
    key: 3,
    color: 'red'
  }
]


const buttonGroup = (
    <>
      {/* with individual props */}
      <div className="container">
        {
          buttonConfig.map(({id, color, key}) => {
            return <CustomButton key={key} id={id} color={color}/>
          })
        }
      </div>

      <Divider margin={10}/>
      <Divider/>

      {/* with spread props */}

      <div className="container">
        {
          buttonConfig.map((item) => {
            return <CustomButton {...item}/>
          })
        }
      </div>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(buttonGroup)
