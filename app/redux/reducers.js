import { combineReducers } from 'redux'
import home from './home/reducer';
import info from './info/reducer'
export default combineReducers({
    home,
    info
})