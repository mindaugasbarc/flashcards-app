import {
    CLICK_CARDSET
} from "../actions/types";


const shownFlashCardsReducer = (shownFlashCards = [], action) => {
    if (action.type === CLICK_CARDSET) {
        return action.payload.flashCardIds;
    }

    return shownFlashCards;
};

export default shownFlashCardsReducer;