import {
    UPDATE_MAX_YEAR,
    UPDATE_MIN_YEAR,
} from "./types";

export const updateMinYear = (year) => (dispatch) => {
    console.log(year);
    dispatch({
        type: UPDATE_MIN_YEAR,
        payload: year
    });
};

export const updateMaxYear = (year) => (dispatch) => {
    console.log(year);
    dispatch({
        type: UPDATE_MAX_YEAR,
        payload: year
    })
};