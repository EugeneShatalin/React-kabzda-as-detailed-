import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    const collapsedStatus = () => {
        setCollapsed(!collapsed)
    }

        return (
            <div>
                <AccordionTitle title={props.titleValue} collapsedStatus={collapsedStatus}/>
                {!collapsed && <AccordionBody />}
            </div>
        );
    }


type AccordionTitlePropsType = {
    title: string
    collapsedStatus: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.collapsedStatus}>{props.title}</h3>
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