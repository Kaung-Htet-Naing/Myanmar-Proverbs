import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    proverbs: counterReducer
});

export default rootReducer;
