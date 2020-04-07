import { combineReducers } from 'redux';
import { register } from './registerReducer';
import { login } from './loginReducer';
import { user } from './userReducer';
import { states } from './statesReducer';

export default combineReducers({
    register,
    login,
    user,
    states
});