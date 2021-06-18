import {initialState} from "./index";

export const SET_CURRENT_DATA = 'SET_CURRENT_DATA';

export const currentDataReducer = (
    state = initialState,
    action
) => {
    const {type, payload} = action;
    switch (type) {
        case SET_CURRENT_DATA:
            return {
                ...state,
                selectedData: payload
            };
        default:
            return state;
    }
};
