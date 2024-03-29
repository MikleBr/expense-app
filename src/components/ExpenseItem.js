import React from 'react'

import './ExpenseItem.css'


export const ExpenseItem = (props) => {


    return (
        <div className='expense-item'>
            <div className=''>
                <div>{props.date.toLocaleString('ru-RU', {})}</div>
                <div></div>
                <div></div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    )
}
