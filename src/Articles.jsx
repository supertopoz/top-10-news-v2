import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import AtricleListEntry from './ArticleListEntry.jsx';
import styled from 'styled-components';

const ArticlesContainer = styled.div`
    margin: 0 auto;
	-webkit-align-self: center; /* Safari 7.0+ */
    align-self: center;
	display: grid;
	grid-gap: 15px;
	padding: 15px;
	max-width: 750px;
    @media only screen and (min-width: 320px)  { 
    	grid-template-columns: 1fr;
    }
    @media only screen and (min-width: 768px)  {    	
  		grid-template-columns: 1fr;
    } 
  	@media only screen and (min-width: 1024px) { 
  		grid-template-columns: 1fr;
	}
`

const Articles = (props) => (

  <ArticlesContainer>
	  {props.articles.map(function(newsItems,index){
	  	return  <AtricleListEntry key={ index } list={newsItems}></AtricleListEntry> 
	  })}
  </ArticlesContainer>

	)



export default Articles