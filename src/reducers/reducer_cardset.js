import {
    ADD_CARDSET,
    UPDATE_CARDSET,
    REMOVE_CARDSET
} from "../actions/types";
import _ from "lodash";

const cardSetReducer = (cardSets = {123: {
    id: "123",
    name: "Medical Exam",
    flashCardIds: ["111", "222"]
}}, action) => {
        if (action.type === ADD_CARDSET) {
            return {...cardSets, [action.payload.id]:  { name: action.payload.name, flashCardIds: []}};
        } else if (action.type === UPDATE_CARDSET) {
            return {...cardSets, [action.payload.id]: { ...action.payload}};
        } else if (action.type === REMOVE_CARDSET) {
            return _.omit(cardSets, action.payload.id);
        }
        return cardSets;
};

export default cardSetReducer;