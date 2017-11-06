import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import AtricleListEntry from './ArticleListEntry.jsx';







const Articles = (props) => (

  <div className="articles" >
	  {props.articles.map(function(newsItems,index){
	  	return  <AtricleListEntry key={ index } list={newsItems}></AtricleListEntry> 
	  })}
  </div>

	)



export default Articles