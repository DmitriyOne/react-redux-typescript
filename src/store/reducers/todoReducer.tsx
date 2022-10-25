import { TodoActionTypes, TTodoAction, TTodoState } from "../../interfaces"

const defaultState: TTodoState = {
  todos: [
    { id: 1, title: '', completed: false }],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = (
  state = defaultState,
  action: TTodoAction
): TTodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return { ...state, loading: true }

    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload }

    case TodoActionTypes.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: action.payload }

    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload }

    case TodoActionTypes.CHANGE_TODO_COMPLETED:
      return {
        ...state, ...state.todos.filter(todo => {
          if (action.payload.id === todo.id) {
            todo.completed = !todo.completed
          } 
          return todo
        })
      }

    default:
      return state
  }
}
