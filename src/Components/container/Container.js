import React from 'react'
import Todo from '../Todo';
import List from '../List';
import Context from '../../Context/Settings';
import NavTool from '../Header';
import Footer from '../Footer';
export default function Container() {
    return (
        <div>
            <Context>
                <NavTool />
                <Todo />
                <List />
                <Footer />
            </Context>
        </div>
    )
}
