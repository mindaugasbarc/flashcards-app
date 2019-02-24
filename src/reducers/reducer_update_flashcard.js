import {
    ADD_FLASHCARD,
    UPDATE_FLASHCARD,
    REMOVE_FLASHCARD,
    CLICK_FLASHCARD
} from "../actions/types"
import _ from "lodash";

const flashCardsReducer = (flashCards = {
    111: {
        id: "111",
        active: false,
        question: "Biggest Muscle?",
        answer: "Quadriceps"
    },
    222: {
        id: "222",
        active: false,
        question: "Back Muscles?",
        answer: "lats, trapezius"
    }
}, action) => {
    if (action.type === ADD_FLASHCARD) {
        return {...flashCards, [action.payload.id]: {...action.payload, active: false}}
    } else if (action.type === UPDATE_FLASHCARD) {
        return {...flashCards, [action.payload.id]: action.payload}
    } else if (action.type === REMOVE_FLASHCARD) {
        return _.omit(flashCards, action.payload.id);
    } else if (action.type === CLICK_FLASHCARD) {
        return {...flashCards, [action.payload.id]: {...action.payload, active: !action.payload.active}}
    }
    return flashCards;
};

export default flashCardsReducer;