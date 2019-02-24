import React, {Component} from "react";


class CardSet extends Component {

    render() {
        return <div className="cardSet" onClick={() => this.props.clicked()}>{this.props.name}</div>
    }
}

export default CardSet;