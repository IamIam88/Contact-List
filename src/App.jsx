import { useState} from "react"
import ContactList from "./components/ContactList"
import SingleContact from "./components/SingleContact"

function App() {
  const [selectedContactId, setSelectedContactId] = useState(false)

  return (
    <>
    {
    selectedContactId ?
    <SingleContact selectedContactId = {selectedContactId}/>
      :
    <ContactList setSelectedContactId = {setSelectedContactId}/>
    }

    </>
  )
}

export default App