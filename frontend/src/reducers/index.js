import {combineReducers} from "redux";
import companies from './companies';
import investments from './investments';
import investors from './investors';
import yearFilter from './yearFilter';

export default combineReducers({
    companies,
    investments,
    investors,
    yearFilter
})