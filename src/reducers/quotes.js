export const quotesReducer = (state = { quote: { quote: 'You take your life in your own hands, and what happens? A terrible thing, no one to blame.', author: 'Erica Jong' } }, action) => {
  switch (action.type) {
    case 'GET_QUOTE':
      return {
        ...state,
        quote: action.payload,
      };
    default:
      return state;
  }
};

export default quotesReducer;
