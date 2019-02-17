import React from 'react';
import './FlashCard.css';
import './Button.css'

const FlashCard = (props) => {
    console.log("flashCard props");
    console.log(props);
    return <div className="flashCardContainer">
        <div onClick={() => props.clicked()} className={props.active ? "flip flipToFront" : "flip flipToBack"
        }>
            <div className="front">{props.question}</div>
            <div className="back">{props.answer}</div>
            <div id="mdiv" >
                <div class="mdiv">
                    <div class="md">
                    </div>
                </div>
            </div>
        </div></div>
};

export default FlashCard;

