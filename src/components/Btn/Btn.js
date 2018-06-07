import React from 'react';
import './Btn.css';

const Btn = ({ text, dataAction,className }) => {
    return <div className={`btn ${className}`} data-action={dataAction}>{text}</div>
}

export default Btn

