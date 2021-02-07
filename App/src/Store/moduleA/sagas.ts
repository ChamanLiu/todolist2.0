import { fork, takeLatest, put, delay, select, cancel, call } from 'redux-saga/effects';
import * as types from '../moduleA/actionTypes';
import * as actions from './actions';
import { RootState } from '../rootReducer'
function* handleRmoveItem() {
    console.log('handleRmoveIte');

    const todolist: types.ITodo[] = yield select((state: RootState) => state.MouldeAReducer.todoList);
    const newtodoList: types.ITodo[] = yield todolist.filter((todo) => {
        return todo.completed === false;
    });
    yield delay(3000)
    //dispatch(REMOVE_TODO_SAGA)
    yield put(actions.removeItemSaga(newtodoList))
}
function* watchRemoveItem() {
    console.log('watchRemoveItem');

    yield takeLatest(types.ACTION_TYPE.REMOVE_TODO, handleRmoveItem);
}
const sagas = [fork(watchRemoveItem)]
export default sagas