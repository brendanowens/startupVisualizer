import {GET_COMPANIES, DELETE_COMPANY, ADD_COMPANY} from "../actions/types";

const initialState = {
    companies: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.payload
            };
        case DELETE_COMPANY:
            return {
                ...state,
                companies: state.companies.filter(company => company.id !== action.payload)
            };
        case ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.payload]
            };
        default:
            return state
    }
}