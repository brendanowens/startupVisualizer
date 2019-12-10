import axios from 'axios';
import {GET_INVESTORS} from "./types";
import {createMessage, returnErrors} from './messages';

export const getInvestors = () => (dispatch) => {
    axios.get('/backend/api/investor/')
        .then(res => {
            dispatch({
                type: GET_INVESTORS,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};