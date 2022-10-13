import React, {useEffect, useState} from "react";
import './App.css';
import email from "./Email";
function ComposeEmail({setEmails, emails}){

    const [recipient, setRecipient] = useState('')
    const[message, setMessage] = useState('')
    const [subject, setSubject] = useState('')


    function handleClick() {
        const newID = emails.length + 1;
        const newEmail = {
            "subject": subject,
            "sender": 'jane@galvanize.com',
            "recipient": recipient,
            "message": message,
            "id": newID
        }
        const newEmailArray = [...emails, newEmail];
        setEmails(newEmailArray)

        setMessage('')
        setSubject('')
        setRecipient('')
    }

    return(
        <>
        <div className="email-compose">

            <label />
            <input type="text"
                   value={recipient}
                   placeholder="Recipients:"
                   className="compose-email-recipient"
                   onChange={event => setRecipient(event.target.value)}
                   />
            <br/>
            <input type="text"
                   value={subject}
                   placeholder="Subject:"
                   className="compose-email-input"
                   onChange={event => setSubject(event.target.value)}
            />
            <br/>
            <input type="text"
                   value={message}
                   placeholder="Message:"
                   className="compose-email-message"
                   onChange={event => {setMessage(event.target.value)}}
            />
                <button onClick={()=>{
                    handleClick()
                }} className="submit-button">Send</button>


        </div>
        </>
    )

}

export default ComposeEmail