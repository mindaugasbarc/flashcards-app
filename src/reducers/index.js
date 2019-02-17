import { combineReducers } from 'redux';
import flashCardsReducer from './reducer_update_flashcard';
import CardSetReducer from './reducer_cardset';

const rootReducer = combineReducers({
    flashCards: flashCardsReducer,
    cardSets: CardSetReducer
});

export default rootReducer;