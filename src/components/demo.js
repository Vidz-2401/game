import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from 'react'

const Demo =(props) =>{
    return<div>
        <h3>{props.number}</h3>
        </div>;
};
export default Demo;
