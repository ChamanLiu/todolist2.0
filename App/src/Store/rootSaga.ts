/**
 * @file root saga file
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import { all, call, cancel } from 'redux-saga/effects';
import moduleAsaga from './moduleA/sagas';
export default function* rootSaga(): Generator {
    try {
        yield all([...moduleAsaga]);
    } catch (err) {
        // This is where error monitoring should go
        console.log('error caught in rootsaga::', err);
    }
}
