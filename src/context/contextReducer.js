const contextReducer = (state, action) => {
  let transcation;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transcation = state.filter((t) => t.id !== action.payload);
      return transcation;

    case "ADD_TRANSACTION":
      transcation = [action.payload, ...state];
      return transcation;

    default:
      return state;
  }
};

export default contextReducer;