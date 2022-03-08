import React, {useState} from "react";

export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    const valueRating = (number: number) => {
        setValue(number)
    }

    return (
        <div>
            <Star selected={value > 0} valueRating={valueRating} id={1}/>
            <Star selected={value > 1} valueRating={valueRating} id={2}/>
            <Star selected={value > 2} valueRating={valueRating} id={3}/>
            <Star selected={value > 3} valueRating={valueRating} id={4}/>
            <Star selected={value > 4} valueRating={valueRating} id={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    valueRating: (number: number) => void
    id: number
}

function Star(props: StarPropsType) {

    let color = {
        color: props.selected ? "yellow" : ""
    }
    return <span style={color} onClick={() => {
        props.valueRating(props.id)
    }}><b>star </b></span>
}