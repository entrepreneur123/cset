import React, {createContext, useReducer} from 'react';
import {currentDataReducer} from "./chooseDataReducer";

export const initialState = {
    selectedData: "Your Channel"
};
export const Context = createContext({});

const combineReducers = (...reducers) => (
    state,
    action
) => {
    for (let i = 0; i < reducers.length; i++) {
        state = reducers[i](state, action);
    }
    return state;
};

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(
        combineReducers(
            currentDataReducer
        ),
        initialState
    );
    const value = {state, dispatch};
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};
