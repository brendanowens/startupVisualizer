import {GET_INVESTORS} from "../actions/types";

const initialState = {
    investors: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INVESTORS:
            return {
                ...state,
                investors: action.payload
            };
        default:
            return state
    }
}