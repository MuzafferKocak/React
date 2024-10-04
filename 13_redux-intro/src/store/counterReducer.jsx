const initialState = {
  count: 0,
};

//? Action type als Variablen definieren
export const inc = "INC";
export const dec = "DEC";
export const reset = "RESET";

//? Action creator definieren

// export const increase =( )=> {
// return {type: inc}

// }
export const increase = () => ({ type: inc });

// export const decrease =( )=> {
// return {type: dec}

// }
export const decrease = () => ({ type: dec });

// export const res =( )=> {
// return {type: reset}

// }
export const res = () => ({ type: reset });

//? Reducer logic
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case inc:
      return { count: state.count + 1 };
    case dec:
      return { count: state.count - 1 };
    case reset:
      return { count: 0 };

    default:
      return state;
  }
};
