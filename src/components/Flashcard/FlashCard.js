import React from 'react';
import './FlashCard.css';
import './Buttons.css'

const FlashCard = (props) => {
    console.log("flashCard props");
    console.log(props);
    return <div className="flashCardContainer">
        <div onClick={() => props.clicked()} className={props.active ? "flip flipToBack" : "flip flipToFront"
        }>
            <div className="front">{props.question}</div>
            <div className="back">{props.answer}</div>
        </div>
        <div className="flashCardActionsContainer">
            <i class="edit icon" onClick ={() => props.update()}></i>
            <i class="window close icon" onClick={() => props.remove()}></i>
        </div>
    </div>
};

export default FlashCard;

