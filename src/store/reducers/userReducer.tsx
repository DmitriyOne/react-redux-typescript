import { TUserState, TUserAction, UserActionTypes } from "../../interfaces"

const defaultState: TUserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (
  state = defaultState,
  action: TUserAction
): TUserState => {
  switch (action.type) {

    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] }

    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload }

    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] }

    default:
      return state;
  }
}
