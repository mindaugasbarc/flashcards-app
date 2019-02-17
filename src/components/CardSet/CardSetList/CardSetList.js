import React, { Component } from "react";
import { connect } from 'react-redux';
import CardSet from '../CardSet';
import { updateCardSet, removeCardSet} from "../../../actions";
import { bindActionCreators} from 'redux';
import './CardSetList.css';

class CardSetList extends Component {
    render() {
        const cardSets = this.props.cardSets.map()

        return <div>Card Set List</div>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateCardSet: updateCardSet,
        removeCardSet: removeCardSet
    }, dispatch)
}

function mapStateToProps(state) {
    return {cardSets: state.cardSets};
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSetList);