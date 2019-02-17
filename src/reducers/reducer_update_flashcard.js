const flashCardsReducer = (flashCards = [{active: false, id: "kazkas", question: "what is my name?", answer: "Mindaugas"}], action) => {
    if (action.type === "ADD_FLASHCARD") {
        action.payload.id = action.payload.question + action.payload.answer;
        return [...flashCards, action.payload];
    } else if (action.type === "UPDATE_FLASHCARD") {
        console.log("updadeFlashCard reducer");
        console.log(action.payload);
        console.log(flashCards);
        return [...flashCards.filter(flashCard => flashCard.id !== action.payload.id), action.payload]
    } else if (action.type === "REMOVE_FLASHCARD") {
        return flashCards.filter(flashCard => flashCard !== action.payload);
    } else if (action.type === "CLICK_FLASHCARD") {
        console.log("Click flashcard reducer");
        console.log(action);
        return flashCards.map(flashCard => {
            return flashCard === action.payload ? {active: !action.payload.active, question: action.payload.question, answer: action.payload.answer, id: action.payload.id} : flashCard
        });
    }

    return flashCards;
};

export default flashCardsReducer;