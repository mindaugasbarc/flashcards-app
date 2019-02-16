const flashCardsReducer = (flashCards = [{active: false, question: "what is my name?", answer: "Mindaugas"}], action) => {
    if (action.type === "ADD_FLASHCARD") {
        return [...flashCards, action.payload];
    } else if (action.type === "REMOVE_FLASHCARD") {
        return flashCards.filter(flashCard => flashCard !== action.payload);
    } else if (action.type === "CLICK_FLASHCARD") {
        console.log("Click flashcard reducer");
        console.log(action);
        return flashCards.map(flashCard => {
            return flashCard === action.payload ? {active: !action.payload.active, question: action.payload.question, answer: action.payload.answer} : flashCard
        });
    }

    return flashCards;
};

export default flashCardsReducer;