import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.css');


class IntroductionComponent extends React.Component{
  render(){
    return(
      <div id='introduction' className="introduction">
      </div>
    )
  }
}

export default CSSModules(IntroductionComponent,style);
export const Introduction = IntroductionComponent;
