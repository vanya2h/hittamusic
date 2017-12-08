import React from "react";

const styleHOC = (Component, style) => {
  return (props) => <div style={{width:'100%'}}>
    <style>{style.toString()}</style>
    {React.createElement(Component, Object.assign({}, { 
      classes: style.locals 
    }, props))}
  </div>
}

export default styleHOC;