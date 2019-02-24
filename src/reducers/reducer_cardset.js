import {
    ADD_CARDSET,
    UPDATE_CARDSET,
    REMOVE_CARDSET
} from "../actions/types";

const cardSetReducer = (cardSets = {123: {
    id: "123",
    name: "Medical Exam",
    flashCardIds: ["111", "222"]
}}, action) => {
        if (action.type === ADD_CARDSET) {
            return cardSets.set(action.payload.id, { name: action.payload.name, flashCardIds: []});
        } else if (action.type === UPDATE_CARDSET) {
            return cardSets.set(action.payload.id, {name: action.payload.name, flashCardIds: action.payload.flashCardIds})
        } else if (action.type === REMOVE_CARDSET) {
            return cardSets.delete(action.payload.id);
        }
        return cardSets;
};

export default cardSetReducer;