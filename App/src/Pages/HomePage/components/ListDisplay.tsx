/**
* @file ListDisplay
* @date 2021-02-05
* @author 
* @lastModify  2021-02-05
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../Store/rootReducer'
import ItemTodo from './ItemTodo'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
import * as types from '../../../Store/moduleA/actionTypes'

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ListDisplay = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const todoList = useSelector((state: RootState) => {
        return state.MouldeAReducer.todoList
    })
    const dispatch = useDispatch()
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            {
                todoList && todoList.map((todo: types.ITodo) => {
                    return (
                        <ItemTodo key={todo.id} todo={todo} />
                    )
                }
                )
            }

        </Row>
    );
};
export default ListDisplay;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */