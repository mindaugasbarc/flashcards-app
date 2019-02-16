export const addFlashCard = (flashCard) => {
    console.log("add flash card payload");
    console.log(flashCard);
    return {
        type: "ADD_FLASHCARD",
        payload: flashCard
    }
};


export const removeFlashCard = (flashCard) => {
    return {
        type: "REMOVE_FLASHCARD",
        payload: flashCard
    }
};

export const clickFlashCard = (flashCard) => {
    console.log("clicked action arguments");
    console.log(flashCard);
  return {
      type: "CLICK_FLASHCARD",
      payload: flashCard
  }
};