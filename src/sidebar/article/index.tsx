import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.css');


class ArticleComponent extends React.Component{
  render(){
    return(
      <div id='article' className="article">
        <div className="title">文章</div>
      </div>
    )
  }
}

export default CSSModules(ArticleComponent,style);
export const Article = ArticleComponent;
