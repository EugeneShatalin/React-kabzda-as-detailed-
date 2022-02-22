import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div className="rating">
            <h2>Rating</h2>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
        ;
}

function Star() {
    return (
        <div className="star">

        </div>
    );
}

function AccordionTitle() {
    return (
        <h3>Menu</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default App;
