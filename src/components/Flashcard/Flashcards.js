import React, {Component} from 'react'
import { connect } from 'react-redux'
import FlashCard from './FlashCard';
import { clickFlashCard, removeFlashCard } from "../../actions";
import { bindActionCreators } from 'redux';
import "./FlashCards.css";


class Flashcards extends Component {
    render() {
        return this.props.flashCards.map(flashCard => {
            return <FlashCard remove={() => this.props.removeFlashCard(flashCard)} clicked={() => this.props.flashCardClick(flashCard)} active={flashCard.active} question={flashCard.question} answer={flashCard.answer}/>
        });
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        flashCardClick: clickFlashCard,
        removeFlashCard: removeFlashCard}, dispatch)
}

function mapStateToProps(state) {
    return {flashCards: state.flashCards};
}

export default connect(mapStateToProps, mapDispatchToProps)(Flashcards);