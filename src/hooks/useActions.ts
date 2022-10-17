import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import ActionCreate from '../store/action-creators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreate, dispatch)
}
