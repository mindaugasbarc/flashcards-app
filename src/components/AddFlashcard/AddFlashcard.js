import React, { Component } from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { addFlashCard } from "../../actions";
import "./AddFlashCard.css"

class AddFlashCard extends Component {
    state = {flashCard: { answer: "", question: ""}};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addFlashCard (this.state.flashCard)
    };

    onQuestionChange = (event) => {
        let flashCard = this.state.flashCard;
        flashCard.question = event.target.value;
        this.setState({ flashCard: flashCard})
    };

    onAnswerChange = (event) => {
        let flashCard = this.state.flashCard;
        flashCard.answer = event.target.value;
        this.setState({ flashCard: flashCard})
    };

    render() {
        return <form className="form" onSubmit={(event) => this.onFormSubmit(event)}>
            <label title="question" >Question</label>
            <input type="text" id="question" value={this.state.flashCard.question} onChange={(event) => this.onQuestionChange(event)}/>
            <label title="answer" >Answer</label>
            <input type="text" id="answer" value={this.state.flashCard.answer} onChange={(event) => this.onAnswerChange(event)}/>.
            <input  type="submit" id="addFlashCard" name="Add"/>
        </form>;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addFlashCard: addFlashCard}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddFlashCard);