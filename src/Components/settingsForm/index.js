import React, { useContext, useState } from 'react';
import { Setting } from '../../Context/Settings';
import { Text } from '@mantine/core';
import { When } from "react-if";

export default function SettingForm() {
    const [data, setData] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [show, setShow] = useState(false);
    const setting = useContext(Setting);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const obj = {
            switch: isChecked,
            perPage: e.target.perPage.value,
            sort: e.target.sort.value || 'Difficulty',
        };
        localStorage.setItem('form', JSON.stringify(obj));
        setData(obj);
        setting.dispatch({ type: 'formSetting', payload: obj });
        setShow(true);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label className="switch">
                    <p>Show completed toDo</p>
                    <input
                        type="checkbox"
                        name="check"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                    <span className="slider round"></span>
                </label>
                <label> Item per page
                    <input type='number' name='perPage' />
                </label>
                <label> Sort Keyword
                    <input type='text' name='sort' placeholder='Difficulty' />
                </label>
                <button type='submit'>Set new Setting</button>
            </form>
            <br /><br /><br />

            <div>
                <When condition={show}>
                    <Text fontSize="xl" weight="bold">Updated Settings</Text>
                    <Text>{data.switch ? 'Show' : 'Hide'} Completed Todos</Text>
                    <Text>Items Per Page: {data.perPage}</Text>
                    <Text>Sort Keyword: {data.sort}</Text>
                </When>
            </div>
        </div>
    );
}
