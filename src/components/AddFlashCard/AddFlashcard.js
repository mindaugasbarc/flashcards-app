import React, { Component } from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { addFlashCard } from "../../actions";
import "./AddFlashCard.css"

class AddFlashCard extends Component {
    state = {flashCard: { answer: "", question: ""}};

    onFormSubmit = () => {
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
        return (<div className="ui form">
            <div className="field">
                <label>Question</label>
                <textarea onChange={(event) => this.onQuestionChange(event)}>{this.state.flashCard.question}</textarea>
            </div>
            <div className="field">
                <label>Answer</label>
                <textarea onChange={(event) => this.onAnswerChange(event)}>{this.state.flashCard.answer}</textarea>
            </div>
            <div class="ui submit button" onClick={() => this.onFormSubmit()}>Submit</div>
        </div>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addFlashCard: addFlashCard}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddFlashCard);