/**
* @file ItemTodo component
* @date 2021-02-05
* @author 
* @lastModify  2021-02-05
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../Store/moduleA/actions'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
import * as types from '../../../Store/moduleA/actionTypes'
interface Iprops {
    todo: types.ITodo
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ItemTodo = ({ todo }: Iprops): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const dispatch = useDispatch()
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const handleChangeStatus = () => {
        dispatch(actions.checkItem(todo))
    }
    const handleUpdateItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val: string = e.target.value
        dispatch(actions.updateItem({
            id: todo.id,
            content: val,
            completed: todo.completed
        }))
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <div className='todolist_body' style={{ marginTop: '10px' }}>
                <input type="checkbox" checked={todo.completed} onChange={() => { handleChangeStatus() }} />
                <input type="text" value={todo.content} onChange={(e) => { handleUpdateItem(e) }} style={{
                    marginLeft: '5px', width: '180px', borderColor: 'transparent'
                }} />
            </div>
        </Row>
    );
};
export default ItemTodo;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */