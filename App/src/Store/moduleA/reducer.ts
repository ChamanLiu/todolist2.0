import { check } from 'prettier';
import * as types from './actionTypes';
const initialState: types.IState = {
    todoList: [],
};
export default (state: types.IState = initialState, action: types.IAction): types.IState => {
    const { type, payload } = action;
    switch (type) {
        case types.ACTION_TYPE.ADD_TODO: {
            const add = {
                ...state,
                todoList: [...state.todoList, payload as types.ITodo],
            };
            return add;
        }
        case types.ACTION_TYPE.INIT_TODOLIST: {
            return {
                ...state,
            };
        }
        case types.ACTION_TYPE.CHECK_TODO: {
            const check = {
                ...state,
                todoList: state.todoList.map((todo) => {
                    return todo.id === payload
                        ? {
                            ...todo,
                            completed: !todo.completed,
                        }
                        : todo;
                }),
            };
            return check;
        }
        case types.ACTION_TYPE.REMOVE_TODO_SAGA: {
            const sagaRemove = {
                ...state,
                todoList: [...(payload as types.ITodo[])]
            };
            console.log('REMOVE_TODO_SAGA');
            return sagaRemove
        }
        case types.ACTION_TYPE.UPDATE_TODO: {
            const update = {
                ...state,
                todoList: state.todoList.map((todo) => {
                    return todo.id === (payload as types.ITodo).id
                        ? {
                            ...todo,
                            content: (payload as types.ITodo).content,
                        }
                        : todo;
                }),
            };
            return update;
        }
        default: {
            console.log('default');
            return state;
        }
    }
};
