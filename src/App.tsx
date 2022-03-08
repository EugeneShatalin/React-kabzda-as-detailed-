import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <Rating value={4}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Pages'} collapsed={true}/>
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
