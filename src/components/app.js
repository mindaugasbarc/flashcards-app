import React, {Component} from 'react';
import FlashCards from '../components/Flashcard/Flashcards';
import AddFlashCard from '../components/AddFlashcard/AddFlashcard';
import Navigation from './navigation/MainNavigation.js';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="ui container">
                        <Navigation/>
                        <Route path="/" exact component={FlashCards}/>
                        <Route path="/add" component={AddFlashCard}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}