'use strict'

import React, { useEffect, useReducer, useState } from 'react';

import { INITIAL_STATES, reducerHandler } from '../Reducer';

export const Setting = React.createContext();

export default function Context(props) {
    const [refresh, setRefresh] = useState(1)
    const [state, dispatch] = useReducer(reducerHandler, INITIAL_STATES)
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('form'))
        dispatch({ type: 'formSetting', payload: data })
    }, [refresh])

    return (
        <Setting.Provider value={{ state, dispatch, setRefresh }}>
            {props.children}
        </Setting.Provider>
    )
}
