import counterReducer from './counterReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    proverbs: counterReducer,
    firestore: firestoreReducer
});

export default rootReducer;
