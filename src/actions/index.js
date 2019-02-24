import {
    ADD_FLASHCARD,
    UPDATE_FLASHCARD,
    REMOVE_FLASHCARD,
    CLICK_FLASHCARD,
    CLICK_CARDSET,
    ADD_CARDSET,
    UPDATE_CARDSET,
    REMOVE_CARDSET
} from "./types"

export const addFlashCard = (flashCard) => {
    console.log("add flash card payload");
    console.log(flashCard);
    return {
        type: ADD_FLASHCARD,
        payload: flashCard
    }
};

export const updateFlashCard = (flashCard) => {
    console.log("update flash card payload");
    console.log(flashCard);
    return {
        type: UPDATE_FLASHCARD,
        payload: flashCard
    }
};


export const removeFlashCard = (flashCard) => {
    return {
        type: REMOVE_FLASHCARD,
        payload: flashCard
    }
};

export const clickFlashCard = (flashCard) => {
    console.log("clicked action arguments");
    console.log(flashCard);
  return {
      type: CLICK_FLASHCARD,
      payload: flashCard
  }
};

export const clickCardSet = (cardSet) => {
    console.log("click card set action");
    console.log(cardSet);

    return {
        type: CLICK_CARDSET,
        payload: cardSet
    }
};

export const addCardSet = (cardSet) => {
    return {
        type: ADD_CARDSET,
        payload: cardSet
    }
};

export const updateCardSet = (cardSet) => {
    return {
        type: UPDATE_CARDSET,
        payload: cardSet
    }
};

export const removeCardSet = (cardSet) => {
    return {
        type: REMOVE_CARDSET,
        payload: cardSet
    }
};