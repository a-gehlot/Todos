import React from "react";
import StepForm from "./step_form";
import StepListItemContainer from './step_list_item_container'

const StepList = (props) => {
    const stepList = props.steps.map((step, idx) => {
        return(
            <StepListItemContainer 
                key={idx}
                step={step}
            />
        )
    })

    const todoID = () => {
        return (props.steps[0].todo_id);
    }

    return(
        <ul>
            {stepList}
            <StepForm receiveStep={props.receiveStep}
            todo_id={todoID()} />
        </ul>
    )
}

export default StepList