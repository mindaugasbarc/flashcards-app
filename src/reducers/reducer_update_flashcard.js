import {
    ADD_FLASHCARD,
    UPDATE_FLASHCARD,
    REMOVE_FLASHCARD,
    CLICK_CARDSET,
    CLICK_FLASHCARD
} from "../actions/types"

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
        action.payload.id = action.payload.question + action.payload.answer;
        return flashCards.set(action.payload.id, {...action.payload, active: false});
    } else if (action.type === UPDATE_FLASHCARD) {
        return flashCards.set(action.payload.id, {...action.payload})
    } else if (action.type === REMOVE_FLASHCARD) {
        return flashCards.delete(action.payload.id);
    } else if (action.type === CLICK_FLASHCARD) {
        return flashCards.map(flashCard => {
            return flashCard === action.payload ? {active: !action.payload.active, question: action.payload.question, answer: action.payload.answer, id: action.payload.id} : flashCard
        });
    } else if (action.type === CLICK_CARDSET) {
        return action.payload.flashCards;

    }

    return flashCards;
};

export default flashCardsReducer;