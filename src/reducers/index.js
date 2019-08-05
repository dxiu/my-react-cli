import { combineReducers } from 'redux' //把所有需要处理的值，结合起来；
import details from './details'
const Reducers = combineReducers({
  details
})
export default Reducers;