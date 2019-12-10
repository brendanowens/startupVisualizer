import axios from 'axios';
import {GET_INVESTMENTS} from "./types";
import {createMessage, returnErrors} from './messages';

export const getInvestments = () => (dispatch) => {
    axios.get('/backend/api/investment/')
        .then(res => {
            dispatch({
                type: GET_INVESTMENTS,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};