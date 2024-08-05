import  {useEffect, useState} from "react";

function SingleContact({ selectedContactId, setSelectedContactId }) {
    
  const [contacts, setContact] = useState(null);

    useEffect(() => {
        async function fetchSingleContact() {
            try {
              // your fetch logic will go here
              const res = await fetch (
             `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
              );
              const json = await res.json();
              console.log(json);
              setContact(json);
            } catch (error) {
              console.error(error);
            }
          }
          fetchSingleContact();
        }, [selectedContactId]);
  return (
  <div>
    <h1>Details for Contact</h1>
    <p>{contacts?.name}</p>
    <p>{contacts?.phone}</p>
    <p>{contacts?.company?.name}</p>
    <button onClick={() => setSelectedContactId(null)}>Go back</button>
   </div>
  );
}

export default SingleContact;