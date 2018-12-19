import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.css');


class PicComponent extends React.Component{
  render(){
    return(
      <div id='pic' className="pic">
      </div>
    )
  }
}

export default CSSModules(PicComponent,style);
export const Pic = PicComponent;
