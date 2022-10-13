import React, {useState} from "react";


function Email({subject, message,sender,recipient,date,setDisplayId, id, clickedOn}) {
    const [mouseOver, setMouseOver] = useState(false)


    function handleMouseEnter() {
        setMouseOver(!mouseOver)
        if (mouseOver) {
            alert('Click Subject for email details: ')
        }
    }
    function handleClick() {
        setDisplayId(id)
    }
    if(clickedOn){
        return (
            <div className="emailListItem">
            <span onClick={handleClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseEnter}
                  className={"emailListLine"}>
                    Subject: {subject} | From: {sender} | Date: {date}
                <br/>
                    <br/>
                    Message: {message}
                </span>
            </div>

        )
    }else{
        return (
            <div className="emailListItem">
            <span onClick={handleClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseEnter}
                  className={"emailListLine"}>
                    Subject: {subject} | From: {sender}
            </span>
            </div>

        )
    }


}

export default Email