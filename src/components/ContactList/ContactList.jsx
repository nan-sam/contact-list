import React,{ useEffect, useState } from "react";
import ContactRow from "../ContactRow/ContactRow";



function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        async function fetchContacts() {
            try {
              // your fetch logic will go here
              const res = await fetch (
             "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
              );
              const json = await res.json();
              console.log(json);
              setContacts(json);
            } catch (error) {
              console.error(error);
            }
          }
          fetchContacts();
    }, []);
    return (
        <>
        <h2>Contact List</h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                    {contacts.map((contacts)=> (
                        <ContactRow 
                        key ={contacts.id} 
                        contacts={contacts} 
                        setSelectedContactId={setSelectedContactId}
                        />
                    ))};
                
            </tbody>
        </table>
        </>
    );

}

export default ContactList;
