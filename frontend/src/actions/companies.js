import axios from 'axios';
import {GET_COMPANIES, DELETE_COMPANY, ADD_COMPANY, GET_ERRORS} from "./types";
import {createMessage, returnErrors} from './messages';

export const getCompanies = () => (dispatch) => {
    axios.get('/backend/api/company/')
        .then(res => {
            dispatch({
                type: GET_COMPANIES,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteCompany = (id) => (dispatch) => {
    axios.delete(`/backend/api/company/${id}/`)
        .then(res => {
            dispatch(createMessage({deleteLead: "Company deleted"}));
            dispatch({
                type: DELETE_COMPANY,
                payload: id
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addCompany = (company) => (dispatch) => {
    axios.post('/backend/api/company/', company)
        .then(res => {
            dispatch(createMessage({addLead: "Company added"}));
            dispatch({
                type: ADD_COMPANY,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};