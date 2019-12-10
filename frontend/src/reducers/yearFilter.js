import {UPDATE_MIN_YEAR, UPDATE_MAX_YEAR} from "../actions/types";

const initialState = {
    min_year: 1900,
    max_year: 2020
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_MIN_YEAR:
            return {
                ...state,
                min_year: action.payload,
            };
        case UPDATE_MAX_YEAR:
            return {
                ...state,
                max_year: action.payload,
            };
        default:
            return state
    }
}