
import page_1 from './page_1_reducer';
// import page_2 from './page_2_reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    router:routerReducer,
    page_1
    // page_2
});

export default rootReducer;