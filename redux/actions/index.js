//Action Types
export const GET_PROVERBS = "GET_PROVERBS";

//Action Creator
export const getProverbs = () => {
    dispatch({ type: GET_PROVERBS })
}
