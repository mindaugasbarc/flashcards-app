import { combineReducers } from 'redux';
import flashCardsReducer from './reducer_update_flashcard';
import CardSetReducer from './reducer_cardset';
import shownFlashCardsReducer from './reducer_shown_flashCards';

const rootReducer = combineReducers({
    flashCards: flashCardsReducer,
    cardSets: CardSetReducer,
    shownFlashCards: shownFlashCardsReducer
});

export default rootReducer;