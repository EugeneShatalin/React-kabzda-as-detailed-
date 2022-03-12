import React, { useState } from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export type RatingValueType = 0 | 1 | 2 | 3| 4 | 5;

function App() {

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}
            />
            <OnOff />

            <UncontrolledAccordion titleValue={'UncontrolledAccordion'}/>
            <UncontrolledRating/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
