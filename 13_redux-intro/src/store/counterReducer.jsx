const initialState = {
  count: 0,
};

export const inc = "INC"
export const dec = "DEC"
export const reset = "RESET"

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case inc:
      return { count: state.count + 1 };
    case dec:
      return { count: state.count - 1 };
    case reset:
      return { count: 0 };

    default:
      return state
  }
};
