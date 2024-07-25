import React from "react";

function ContactRow({ contacts, setSelectedContactId }) {
  return (
    <tr onClick={() => setSelectedContactId(contacts.id)}>
        <td>{contacts?.name}</td>
        <td>{contacts?.email}</td>
        <td>{contacts?.phone}</td>
    </tr>
  );
}

export default ContactRow