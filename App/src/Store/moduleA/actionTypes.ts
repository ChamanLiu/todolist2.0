import { types } from "@babel/core";

export interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}
export interface IState {
    todoList: ITodo[];
}
export interface IAction {
    type: ACTION_TYPE;
    payload: PadloadUnite;
}
export enum ACTION_TYPE {
    ADD_TODO = 'addTodo',
    REMOVE_TODO = 'removeTodo',
    REMOVE_TODO_SAGA = 'removeTodo_saga',
    TOGGLE_TODO = 'toggleTodo',
    INIT_TODOLIST = 'initTodo',
    CHECK_TODO = 'checkTodo',
    UPDATE_TODO = 'updateTodo',
}

export type PadloadUnite = ITodo | IState | ITodo[] | number;
