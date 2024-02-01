import React from "react";

const ContactList = ({c,onDelete}) => {
    return (
        <ul>
            {c.map((contact) => (
                <li key={contact.id}>
                    {contact.name} - {contact.number}
                    <button id={contact.id} onClick={onDelete}>Delete</button>
                </li>))}
        </ul>
    )
}

export default ContactList