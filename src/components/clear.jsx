import React from 'react';

const Clear = (props) => (
    <div className="clear-button"
    onClick={props.clickHandler}>
        {props.children}
    </div>
);

export default Clear;