import { GET_PROVERBS } from '../actions';

const counterReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PROVERBS:
            return { ...state }
        default:
            return { ...state };
    }
};

export default counterReducer;
