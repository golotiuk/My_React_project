/**
 * Created by tarik on 09.05.2017.
 */
import { combineReducers } from 'redux'
import page from './page'
import user from './user'

export default combineReducers({
    page,
    user
})