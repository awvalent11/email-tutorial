import React, {useEffect, useState} from "react";
import './App.css';
import Email from "./Email";
import email from "./Email";
import ComposeEmail from "./ComposeEmail";
// DONE View all of my email messages (subject line + sender):
// DONE View one of my email messages with all of its details: by id -> in return (value) ? displaythis : this
// DONE Send an email
// TODO Search for a specific email by subject
function App() {
    const [emails, setEmails] = useState([{
        subject: '',
        sender: '',
        recipient: '',
        message: '',
        date: '',
        id: -1,
    }]);
    const [sender, setSender] = useState("")
    const [displayId, setDisplayId] = useState(-1)


    useEffect(() => {
        fetch('http://localhost:3001/emails')
            .then(res => res.json())
            .then(value => {
                setEmails(value)
            })
    }, [])


    if (displayId >= 0) {
        return (
            <div>
                <>
                    <Email
                        clickedOn={true}
                        subject={emails[displayId].subject}
                        sender={emails[displayId].sender}
                        recipient={emails[displayId].recipient}
                        message={emails[displayId].message}
                        date={emails[displayId].date}
                        id={emails[displayId].id}
                        setDisplayId={setDisplayId}

                    />
                </>


            </div>)
    } else {
        return (
            <div className="App">
                <ul>
                    {emails.map(value => {
                        return <li key={value.id}><Email
                            clickedOn = {false}
                            setDisplayId={setDisplayId}
                            subject={value.subject}
                            sender={value.sender}
                            recipient={value.recipient}
                            message={value.message}
                            date={value.date}
                            id={value.id}/></li>
                    })}
                </ul>
                <ComposeEmail emails={emails} setEmails={setEmails} />
            </div>
        );
    }

}

export default App;
