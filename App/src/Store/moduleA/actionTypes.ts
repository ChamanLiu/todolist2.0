import { types } from "@babel/core";

export interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}
export interface IState {
    todoList: ITodo[];
}
export interface AddTodoAction {
    type: typeof ACTION_TYPE.ADD_TODO,
    payload: ITodo
}
export interface RemoveTodoAction {
    type: typeof ACTION_TYPE.REMOVE_TODO,
    payload: ITodo[]
}
export interface RemoveTodoSagaAction {
    type: typeof ACTION_TYPE.REMOVE_TODO_SAGA,
    payload: ITodo[]
}
export interface INIT_TODOLISTAction {
    type: typeof ACTION_TYPE.INIT_TODOLIST,
    payload: []
}
export interface CheckTodoAction {
    type: typeof ACTION_TYPE.CHECK_TODO,
    payload: ITodo
}
export interface UpdateTodoAction {
    type: typeof ACTION_TYPE.UPDATE_TODO,
    payload: ITodo
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

export type MoudleAActionTypes = AddTodoAction | RemoveTodoAction | RemoveTodoSagaAction
    | CheckTodoAction | UpdateTodoAction | INIT_TODOLISTAction
