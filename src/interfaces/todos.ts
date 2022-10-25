export interface ITodo {
  id: number
  title: string
  completed: boolean
}

export enum TodoActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
  CHANGE_TODO_COMPLETED = 'CHANGE_TODO_COMPLETED'
}

interface IFetchTodoAction {
  type: TodoActionTypes.FETCH_TODO
}

interface IFetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODO_SUCCESS,
  payload: ITodo[]
}

interface IFetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODO_ERROR,
  payload: string
}

interface ISetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: number
}

interface IChangeTodoCompleted {
  type: TodoActionTypes.CHANGE_TODO_COMPLETED,
  payload: ITodo
}

export type TTodoAction =
  IFetchTodoAction
  | IFetchTodoSuccessAction
  | IFetchTodoErrorAction
  | ISetTodoPageAction
  | IChangeTodoCompleted

export type TTodoState = {
  todos: ITodo[]
  loading: boolean
  error: string | null
  page: number
  limit: number
}

