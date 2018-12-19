import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import { Introduction } from './introduction';
import { Pic } from './pic';
import { Article} from './article';
const style = require('./style.css');


class SidebarComponent extends React.Component{
  render(){
    return(
      <div id='sidebar' className="sidebar">
      <Introduction/>
      <Pic/>
      <Article/>
      </div>
    )
  }
}

export default CSSModules(SidebarComponent,style);
export const Sidebar = SidebarComponent;