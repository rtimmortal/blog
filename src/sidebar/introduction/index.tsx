import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.css');


class IntroductionComponent extends React.Component{
  render(){
    return(
      <div id='introduction' className="introduction">
      <div className="about">TENG TENG</div>
      <div className="some">伪文艺切图仔</div>
      </div>
    )
  }
}

export default CSSModules(IntroductionComponent,style);
export const Introduction = IntroductionComponent;
