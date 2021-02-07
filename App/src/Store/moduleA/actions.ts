import * as types from './actionTypes';
export const addItem = (payload: types.PadloadUnite): types.IAction => {
    return {
        type: types.ACTION_TYPE.ADD_TODO,
        payload: payload,
    };
};
export const checkItem = (payload: types.PadloadUnite): types.IAction => {
    return {
        type: types.ACTION_TYPE.CHECK_TODO,
        payload: payload,
    };
};
export const removeItem = (payload: types.PadloadUnite): types.IAction => {
    return {
        type: types.ACTION_TYPE.REMOVE_TODO,
        payload: payload,
    };
};
export const updateItem = (payload: types.PadloadUnite): types.IAction => {
    return {
        type: types.ACTION_TYPE.UPDATE_TODO,
        payload: payload,
    };
};
export const removeItemSaga = (payload: types.PadloadUnite): types.IAction => {
    return {
        type: types.ACTION_TYPE.REMOVE_TODO_SAGA,
        payload: payload,
    };
};
