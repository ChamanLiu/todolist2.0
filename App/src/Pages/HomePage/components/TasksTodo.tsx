/**
* @file TasksTodo
* @date 2021-02-05
* @author 
* @lastModify  2021-02-05
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState, useRef } from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../../../Store/moduleA/actionTypes'
import { RootState } from '../../../Store/rootReducer'
import * as actions from '../../../Store/moduleA/actions'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const TasksTodo = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const myState = useSelector((state: RootState) => {
        return state.MouldeAReducer
    })
    const dispatch = useDispatch()
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    let inPutVal: any = ''
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const inputRef = useRef<HTMLInputElement>(null)
    const handleAddItem = () => {
        dispatch(actions.addItem({
            id: Number(new Date().getTime()),
            completed: false,
            content: inPutVal
        }))
        inputRef.current!.value = ''
    }
    const handleGetItemData = (e: React.ChangeEvent<HTMLInputElement>) => {
        inPutVal = e.target.value

    }
    const handleRemoveItem = () => {

        return dispatch(actions.removeItem(myState.todoList))

    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <input type="text" onChange={(e) => handleGetItemData(e)} ref={inputRef} style={{ width: '200px' }} /><button onClick={handleAddItem}>添加</button>
            <button onClick={handleRemoveItem}>移除</button>
        </Row>
    );
};
export default TasksTodo;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */