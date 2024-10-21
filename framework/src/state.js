// framework/src/state.js

let state = {};
let listeners = [];

export function getState() {
    return state;
}

export function setState(newState) {
    state = { ...state, ...newState };
    notify();
}

export function subscribe(listener) {
    listeners.push(listener);
}

function notify() {
    for (let listener of listeners) {
        listener(state);
    }
}
