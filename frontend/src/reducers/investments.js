import {GET_INVESTMENTS} from "../actions/types";

const initialState = {
    investments: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INVESTMENTS:
            return {
                ...state,
                investments: action.payload
            };
        default:
            return state
    }
}