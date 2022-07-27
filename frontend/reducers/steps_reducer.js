import { RECEIVE_STEP, REMOVE_STEP, RECEIVE_STEPS } from "../actions/step_actions";

const initialState = {
    1: {
        id: 1,
        title: "buy soap",
        todo_id: 1,
        done: false
    }
}

const stepsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_STEPS: return (
            action.steps.reduce((accumulator, value, index) => {
                return {...accumulator, [value.id]: value}
            }, {})
        )

        case RECEIVE_STEP: return {
            ...state,
            [action.step.id]: action.step
        }

        case REMOVE_STEP:
            const next = {...state};
            delete next[action.step.id];
            return next;

        default:
            return state;
    }
}

export default stepsReducer;