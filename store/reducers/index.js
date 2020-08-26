import { combineReducers } from "redux";

const selectedProverbReducer = (state = { aciton: '' }, action) => {
  switch (action.type) {
    case 'SELECTED_PROVERB':
      return action.payload;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  proverb: selectedProverbReducer
})