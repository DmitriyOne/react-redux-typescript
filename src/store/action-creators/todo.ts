import axios from "axios"
import { Dispatch } from "react"
import { TodoActionTypes, TTodoAction } from "../../interfaces"

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TTodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODO })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page,
          _limit: limit
        }
      })
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODO_SUCCESS,
          payload: response.data
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload: 'Ошибка при загрузке списка дел'
      })
    }
  }
}
