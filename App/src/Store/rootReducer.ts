/**
 * @file root reducer
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import { combineReducers } from 'redux';
import MouldeAReducer from './moduleA/reducer';
// import demoReducer from './moduleA/reducer';

// combine all the reducer in here
const rootReducer = combineReducers({
    MouldeAReducer,
});
// export the root reducer state
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
