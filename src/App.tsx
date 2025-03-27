import { Greet } from "./components/greet"
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"

// import './App.css'
function App() {

  const personName = {
    first: "Nabid",
    last: "Khandakar"
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Lee'
    },
    {
      first: 'Json',
      last: 'Mount'
    },
    {
      first: 'Java',
      last: 'Dayal'
    }
  ]
  return (
    <>
      <Greet name='Niloy' mesageCount={20} isLoggedIn={false}/>
      <Person name = {personName}/>
      <PersonList names={nameList}/>
    </>
  )
}

export default App
