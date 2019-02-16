import React, { Component } from 'react';
import FlashCards from '../components/Flashcard/Flashcards';
import AddFlashCard from '../components/AddFlashcard/AddFlashcard';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>FlashCard App</h1>
                <FlashCards/>
                <AddFlashCard/>
            </div>
        );
    }
}