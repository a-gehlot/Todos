import React from "react";

const StepListItem = (props) => {
    function toggleDone(e) {
        e.preventDefault();
        let toggledStep = Object.assign({},
            props.step,
            {done: !props.step.done}
        )
        props.receiveStep(toggledStep)
    }

    return(
        <ul>
            <li>Step: {props.step.title}</li>
            <button onClick={toggleDone}>{ props.step.done ? "Undo" : "Done" }</button>
            <button onClick={e => props.removeStep(props.step)}>Delete</button>
        </ul>

    )
}

export default StepListItem