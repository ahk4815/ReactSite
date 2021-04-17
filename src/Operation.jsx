import React from 'react';
import {sum,diff,mul,div} from "./Operator"

const cssStyle={};
cssStyle.background='red';
function Operations(){
return(
    
    <div >
        <ul style={cssStyle}>
            <li> Sum is {sum(5,10)}</li>
            <li>Difference is {diff(5,10)}</li>
            <li>Multiplication is {mul(5,10)}</li>
            <li>Division is {div(5,10)}</li>
        </ul>
    </div>
);
}
export default Operations;