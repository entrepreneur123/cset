import {SET_CURRENT_DATA} from "./chooseDataReducer";

const setCurrentData = (data) => ({
    type: SET_CURRENT_DATA,
    payload: data,
});

export const setSelectedDataFunc = async (dispatch, value) => {
    dispatch(setCurrentData(value));
};
