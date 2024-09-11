import { createStore } from 'redux';

const initialState = {
    counter: 0,
    showCounter: true
};

const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        // This return value will overwrite the existing state
        // Thumb rule in react - never mutate the existing state , always override it. Mutating might lead to bugs, unpredictable behaviour, side effects and make debugging difficult
        return {
            ...state,
            counter: state.counter + action.amount
        };
    }

    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        };
    }

    if (action.type === 'TOGGLE') {
        return {
            ...state,
            showCounter: !state.showCounter
        };
    }

    return state;
}

const counterStore = createStore(counterReducer);

export default counterStore;