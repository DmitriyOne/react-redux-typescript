export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IUser {
  id: number
  name: string
  username: string
  email: string
  completed: boolean
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS
}

interface IFetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: IUser[]
}

interface IFetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR,
  payload: string
}

export type TUserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction

export type TUserState = {
  users: IUser[],
  loading: boolean,
  error: string | null
}
