import React from 'react';
import './Block.css';

const Block = ({ text, className }) => {
    return <div className={`block ${className}`}>
        <span>{text}</span>
    </div>
}

export default Block