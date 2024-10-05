const initialState = {
  todoList: [{ id: new Date().getTime(), text: "", completed: false }],
};

export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TOGGLE = "TOGGLE";

//? action creator func.
export const addTodo = (payload) => ({ type: ADD, payload: payload });
export const clearTodo = (payload) => ({ type: CLR});

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case CLR:
      return initialState

      case DEL:
      return initialState

      case TOGGLE:
      return initialState

    default:
      return state;
  }
};
