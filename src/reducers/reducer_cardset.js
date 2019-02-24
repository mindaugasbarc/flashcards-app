const cardSetReducer = (cardSets = [ {name: "Medical Exam", flashCards: [{question: "Biggest Muscle?", answer: "quadriceps"}]},
    {name: "Geography", flashCards: [{question: "Auksciausias krioklys?", answer: "Anchelio"}]}], action) => {
        if (action.type === "ADD_CARDSET") {
            return cardSets.set(action.payload.name, []);
        } else if (action.type === "UPDATE_CARDSET") {
            return cardSets.set(action.payload.name, action.payload.flashCards)
        } else if (action.type === "REMOVE_CARDSET") {
            return cardSets.delete(action.payload.name);
        }
        return cardSets;
};

export default cardSetReducer;