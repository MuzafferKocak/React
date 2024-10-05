const initialState = {
  todoList: [{ id: new Date().getTime(), text: "NEW TODO", completed: false }],
};

export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TOGGLE = "TOGGLE";

//? action creator func.
export const addTodo = (payload) => ({ type: ADD, payload: payload });
export const clearTodo = () => ({ type: CLR });
export const delTodo = (id) => ({ type: DEL, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE, payload: id });

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
      return initialState;

    case DEL:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };

    case TOGGLE:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    default:
      return state;
  }
};
