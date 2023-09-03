import { useState, useEffect } from "react"
import CardInfo from "./CardInfo"
import "./App.css"

const endpointUrl = "https://random-data-api.com/api/users/random_user?size=10"

interface Employment {
  title: string
}

interface Address {
  city: string
  state: string
}

interface ItemApi {
  id: string
  avatar: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  employment: Employment
  address: Address
}

interface Item {
  id: string
  avatar: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  employment: Employment
  address: Address
}

interface AppState{
  items: Item[],
  shouldLoadItems: boolean
}


function App() {
  const [{items, shouldLoadItems}, setModel] = useState<AppState>({
    items: [],
    shouldLoadItems: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(endpointUrl)
      const data: ItemApi[] = await response.json()

      setModel({
        items: data.map(mapItemApiToItem),
        shouldLoadItems: false,
      })
    }

    if(shouldLoadItems){
      fetchData()
    }

  }, [shouldLoadItems])

  function fetchRandomData() {
    setModel((prevState) => {
      return {
        ...prevState,
        shouldLoadItems: true,
      }
    })
  }

  return (
    <div className="container">
      <button onClick={fetchRandomData}>Fetch Random</button>
      <div className="background">
        {
          items.map(({id,
                             avatar,
                             firstName,
                             lastName,
                             employment:{title: employmentTitle},
                             address: {state, city},
                             phoneNumber,
                             email}) => (

              <CardInfo
                  key={id}
                  avatar={avatar}
                  title={employmentTitle}
                  email={email}
                  phoneNumber={phoneNumber}
                  name={getName(firstName, lastName)}
                  address={getAddress(city, state)}
              />
          ))
        }
      </div>
    </div>
  )
}

function mapItemApiToItem({id,
                            employment,
                            email,
                            phone_number,
                            last_name,
                            first_name,
                            avatar,
                            address}: ItemApi): Item {
  return {
    id,
    avatar,
    firstName: first_name,
    lastName: last_name,
    email,
    phoneNumber: phone_number,
    employment,
    address
  }
}

function getName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

function getAddress(city: string, state: string) {
  return `${city}, ${state}`;
}

export default App
