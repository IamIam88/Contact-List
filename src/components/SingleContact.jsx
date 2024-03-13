import { useEffect, useState } from "react"
import axios from 'axios'

export default function SingleContact({selectedContactId}){
  const [contact, setContact] = useState()
  useEffect(() => {
    const getSingleContact = async () => {
      const response = await axios (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
      setContact(response.data)
    }
    getSingleContact()
  }, [])
  return(
    <div>
      {contact && (
        <div>
          <p>
            <b>Name:</b> {contact.name}
          </p>
          <p>
            <b>Email:</b> {contact.email}
          </p>
          <p>
            <b>Phone:</b> {contact.phone}
          </p>
        </div>
      )}
    </div>
  );
}