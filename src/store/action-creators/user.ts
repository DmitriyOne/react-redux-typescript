import axios from "axios"
import { Dispatch } from "react"
import { TUserAction, UserActionTypes } from "../../interfaces"

export const fetchUsers = () => {
  return async (dispatch: Dispatch<TUserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Ошибка при загрузке пользователей'
      })
    }
  }
}
