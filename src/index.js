import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

//import Home from "./Home";
import Home,{age,name} from "./Home";


let curDate=new Date();
curDate=curDate.getHours();
let greeting="";

const cssStyle={};

if(curDate>=1 && curDate<=12)
{
  greeting="Morning";
  cssStyle.color="green";
}
else if(curDate<=18){
  greeting="Evening";
  cssStyle.color="blue"
}
else{
  greeting="Night";
  cssStyle.color="blue";
}

ReactDom.render(
  <>
  <div>
    <h1>{name}</h1>
    <h1>{age}</h1>
   <Home/>
    <br/>
   <h1>Hey Good <span style={cssStyle}>{greeting}</span></h1>
   </div>
  </>
  ,
  document.getElementById('root')
);