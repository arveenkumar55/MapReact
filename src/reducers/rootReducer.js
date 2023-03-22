import SaveSearchReducer from './SaveSearchReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    SaveSearchReducer
})

export default rootReducer