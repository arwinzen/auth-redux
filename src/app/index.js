import { combineReducers } from "redux";
import userReducer from '../features/auth';

const allReducers = combineReducers({userReducer});

export default allReducers;

// export default combineReducers({
//     userReducer
// })