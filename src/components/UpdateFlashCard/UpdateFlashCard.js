import React, {Component} from "react";
import "./UpdateFlashCard.css";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {updateFlashCard} from "../../actions";

class UpdateFlashCard extends Component {

    state = {
        flashCard: {
            id: "",
            question: "",
            answer: ""
        }
    };

    componentWillMount() {
        console.log("componentWillMount");
        console.log(this.props.location.state.flashCard);
        this.setState({flashCard: this.props.location.state.flashCard});
    }

    onFormSubmit = () => {
        console.log("onFormSubmit");
        console.log(this.state.flashCard);
        this.props.updateFlashCard (this.state.flashCard)
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
        console.log("update flash card state:");
        console.log(this.state);
        console.log(this.props);
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
    return bindActionCreators({updateFlashCard: updateFlashCard}, dispatch);
}

export default connect(null, mapDispatchToProps)(UpdateFlashCard);