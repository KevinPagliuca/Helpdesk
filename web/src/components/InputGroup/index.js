import React from 'react';
import './styles.css';

const Input = (props) => {
    return (
        
        <div className="content">
            <label htmlFor={props.id} className={props.labelclass}>{props.labelname}</label>
            <input
                id={props.id}
                type={props.type}
                className={props.className} 
                onChange={props.onChange}
            />
            <div className="border-input" />
            {props.children}
        </div>
    );
}

export default Input;