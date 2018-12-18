import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as CSSModules from 'react-css-modules';
import { Header } from './header';
import { on_loaded, initiate_load} from './cfg';
const style = require('./style.css');

class MainComponent extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <div id='body' className="body">
          <div className='body-pic'></div>
          <div className='body-content'> </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainComponent,style);
const Blog = MainComponent;
on_loaded(() => {
  ReactDom.render(<Blog/>,document.getElementById('root'));
})

initiate_load();

