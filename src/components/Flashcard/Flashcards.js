import React, {Component} from 'react'
import { connect } from 'react-redux'
import FlashCard from './FlashCard';
import { clickFlashCard, removeFlashCard } from "../../actions";
import { bindActionCreators } from 'redux';
import "./FlashCards.css";


class Flashcards extends Component {

    onFlashCardUpdate = (flashCard) => {
        this.props.history.push({
            pathname: '/update',
            state: {flashCard: flashCard}
        });
    };

    render() {
        const flashCards = this.props.flashCards.map(flashCard => {
            return <FlashCard update={() => this.onFlashCardUpdate(flashCard)} remove={() => this.props.removeFlashCard(flashCard)} clicked={() => this.props.flashCardClick(flashCard)} active={flashCard.active} question={flashCard.question} answer={flashCard.answer}/>
        });

        return (<div className="flashCardsContainer">
        { flashCards }
        </div>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        flashCardClick: clickFlashCard,
        removeFlashCard: removeFlashCard}, dispatch)
}

function mapStateToProps(state, ownProps) {
    return {flashCards: state.flashCards};
}

export default connect(mapStateToProps, mapDispatchToProps)(Flashcards);