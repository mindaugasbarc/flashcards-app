import { combineReducers } from 'redux';
import flashCardsReducer from './reducer_update_flashcard';

const rootReducer = combineReducers({
    flashCards: flashCardsReducer
});

export default rootReducer;