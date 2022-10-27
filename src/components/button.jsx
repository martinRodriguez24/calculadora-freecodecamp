import React from "react";

function Button (props) {
        
    const isOperator = value => {
        return isNaN(value) && (value !== '.' ) && (value !== '=');
    };

    isOperator(props.children)  
    return (
        <button className={`button-container ${isOperator(props.children) ? 'operator' : null} `}
        onClick={() => props.clickHandler(props.children)}>
            
            {props.children}
        </button>
    );
}

export default Button;