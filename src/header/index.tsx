import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.css');


class HeaderComponent extends React.Component{
  render(){
    return(
      <div id='header' className="header">
        <div className="header-name">Immortal's Blog</div>
        <div className="header-content">
          <div className="header-title">HOME</div>
          <div className="header-title">ABOUT AUTHOR</div>
        </div>
      </div>
    )
  }
}

export default CSSModules(HeaderComponent,style);
export const Header = HeaderComponent;
