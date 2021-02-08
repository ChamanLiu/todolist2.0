import * as types from './actionTypes';
export const addItem = (payload: types.ITodo): types.AddTodoAction => {
    return {
        type: types.ACTION_TYPE.ADD_TODO,
        payload: payload,
    };
};
export const checkItem = (payload: types.ITodo): types.CheckTodoAction => {
    return {
        type: types.ACTION_TYPE.CHECK_TODO,
        payload: payload,
    };
};
export const removeItem = (payload: types.ITodo[]): types.RemoveTodoAction => {
    return {
        type: types.ACTION_TYPE.REMOVE_TODO,
        payload: payload,
    };
};
export const updateItem = (payload: types.ITodo): types.UpdateTodoAction => {
    return {
        type: types.ACTION_TYPE.UPDATE_TODO,
        payload: payload,
    };
};
export const removeItemSaga = (payload: types.ITodo[]): types.RemoveTodoSagaAction => {
    return {
        type: types.ACTION_TYPE.REMOVE_TODO_SAGA,
        payload: payload,
    };
};
