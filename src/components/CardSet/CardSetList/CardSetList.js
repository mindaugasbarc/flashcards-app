import React, { Component } from "react";
import { connect } from 'react-redux';
import CardSet from '../CardSet';
import { updateCardSet, removeCardSet, clickCardSet} from "../../../actions";
import { bindActionCreators} from 'redux';
import './CardSetList.css';

class CardSetList extends Component {

    onCardSetClickHandler = (cardSet) => {
        this.props.clickCardSet(cardSet);
        this.props.history.push({
            pathname: '/flashCards'
        });
    };

    render() {
        const cardSets = this.props.cardSets.map(cardSet => {
            return (<div className="item" key={cardSet.id}>
                <CardSet className="cardSet"
                         clicked={() => this.onCardSetClickHandler(cardSet)}
                         name={cardSet.name}
                         id={cardSet.id} />
                <div class="ui divider"></div>
            </div>);
        });

        return <div className="ui relaxed list">{cardSets}</div>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateCardSet: updateCardSet,
        removeCardSet: removeCardSet,
        clickCardSet: clickCardSet
    }, dispatch)
}

function mapStateToProps(state) {
    return {cardSets: Object.values(state.cardSets)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSetList);