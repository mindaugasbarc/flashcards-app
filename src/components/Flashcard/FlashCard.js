import React from 'react';
import './FlashCard.css'

const FlashCard = (props) => {
    console.log("flashCard props");
    console.log(props);
    return <div className="flashCardContainer">
        <div onClick={() => props.clicked()} className={props.active ? "flip flipToFront" : "flip flipToBack"
        }>
            <div className="front">{props.question}</div>
            <div className="back">{props.answer}</div>
        </div>
        <button className="removeButton" onClick={() => props.remove()}>Remove</button>
        </div>

};

export default FlashCard;

