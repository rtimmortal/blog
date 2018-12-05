import * as React from 'react';
import { render } from 'react-dom';
import * as CSSModules from 'react-css-modules';
const style = require('./style.css');

@CSSModules(style)
class Main extends React.Component{
  render(){
    return(
    <div>
    <header id='header' styleName="header">
        <div styleName="header-name">Immortal's Blog</div>
        <div styleName="header-content">
            <div styleName="header-title">HOME</div>
            <div styleName="header-title">ABOUT AUTHOR</div>
        </div>
      </header>
      <div id='body' styleName="body">
        <div styleName='body-pic'></div>
        <div styleName='body-content'> </div>
      </div>
    </div>
    )
  }
}