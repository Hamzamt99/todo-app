import React, { useContext, useEffect, useState } from 'react'
import { Setting } from '../../Context/Settings'
import { Pagination } from '@mantine/core';
import './style.scss'
export default function List() {

    const setting = useContext(Setting)

    const completed = setting.state.list.filter(item => item.complete === true)
    const incompleted = setting.state.list.filter(item => item.complete === false)

    const [activePage, setPage] = useState(1);
    let itemPerPage = 3
    const statItem = (activePage - 1) * itemPerPage
    const endItem = statItem + itemPerPage
    const showingItems = incompleted.slice(statItem, endItem)
    let totalpages = Math.ceil(setting.state.list.length / 3)

    function toggleComplete(id) {
        const items = setting.state.list.filter(item => {
            if (item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        });
        setting.dispatch({ type: 'TOGGLE_COMPLETE', payload: items });
       
    }

    function deleteItem(id) {
        const items = setting.state.list.filter(item => item.id !== id);
        setting.dispatch({ type: 'DELETE_ITEM', payload: items });
    }
    return (
        <div>
            <header data-testid="todo-header" className="todo-header" >
                <h2 data-testid="todo-h1" >To Do List: {showingItems.length} items pending : </h2>
            </header>
            <div className='list-container'>
                <div className="header-container">
                    {
                        showingItems.map(item => (
                            !item.complete &&
                            <div key={item.id} className="todo-item">
                                <p className='pargraph'>Task: {item.text}</p>
                                <p>Assigned to: {item.assignee}</p>
                                <p>Difficulty: {item.difficulty}</p>
                                <div onClick={() => toggleComplete(item.id)} >Complete: <button className='btn'>{item.complete}pending</button> </div>
                                <hr />
                            </div>
                        ))}
                    {/* <header className="todo-header" data-testid="todo-header">
                    <h2 data-testid="todo-h1">To Do List: {completed.length}completed item</h2>
                </header>
                {
                    completed.map(item => (
                        item.complete &&
                        <div key={item.id} className="todo-item">
                            <p>{item.text}</p>
                            <p>Assigned to: {item.assignee}</p>
                            <p>Difficulty: {item.difficulty}</p>
                            <div onClick={() => toggleComplete(item.id)}>Complete: <button>{item.complete}complete</button> </div>
                            <hr />
                        </div>
                    ))} */}
                </div>
            </div>
            <div className='slider'>
                <Pagination value={activePage} onChange={setPage} total={totalpages} />
            </div>
        </div >
    )
}
