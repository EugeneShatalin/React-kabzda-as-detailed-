import React, {useState} from 'react';


const OnOff: React.FC = () => {

    let [on, setOn] = useState(true)

    const blockButtons = {
        display: "flex",
        justifyContent: "space-between",
        width: "300px"
    }
    
    const onStyle = {
        width: "70px",
        height: "30px",
        backgroundColor: on ? "green" : "white",
        color: "black",
        display: "inline-block",

    };
    const offStyle = {
        width: "70px",
        height: "30px",
        backgroundColor: on ? "white" : "red",
        color: "black",
        display: "inline-block",

    };
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "red",
        display: "inline-block",

    }
    return (
        <div style={blockButtons}>
            <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorStyle} ></div>
        </div>
    );
};

export default OnOff;