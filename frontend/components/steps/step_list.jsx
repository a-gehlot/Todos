import React from "react";
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

    return(
        <ul>
            {stepList}
        </ul>
    )
}

export default StepList