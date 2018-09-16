import React from 'react';
import Emotion from './Emotion.jsx';
import moment from 'moment';
import styled from 'styled-components'

const NewsArticle = styled.div`
  color: black;
  display: grid;
  grid-gap: 2px;
  padding: 20px;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 10px; 
  @media only screen and (min-width: 320px)  { 
    grid-template-columns: 3fr 1fr;
  }
  @media only screen and (min-width: 768px)  {      
    grid-template-columns: 5fr 1fr;
  } 
  @media only screen and (min-width: 1024px) { 
    grid-template-columns: 5fr 1fr;
  }
`
const LeftColumn = styled.div``;
const RightColumn = styled.div``;


const ArticleImage = styled.div`
  text-align: center;
`
const ArticleHeading = styled.div`
  font-size: 1.4rem;
`

const ArticleStory = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1rem;
  color:darkgrey;
`

const ArticleEmotion = styled.div`
    font-size: 0.6rem;
`

const ArticleFooter = styled.div`
    font-size: 0.6rem;
    color: grey;
`

const AtricleListEntry = (props) => (
  <a href={props.list.url} target="_blank">
      <NewsArticle>
        <LeftColumn>
        <ArticleHeading>{props.list.title}</ArticleHeading>
        <ArticleStory>
          {props.list.description}                    
        </ArticleStory>
          <ArticleFooter>
          *{props.list.author}
          {"\n"}
          Published: {moment(props.list.publishedAt).format('DD-MMM-YYYY  hh:mm')}
          </ArticleFooter>
      
        <ArticleEmotion>
          {/*  
          <ul className="unstyled">
            { Object.keys(JSON.parse(props.list.emotion)).map(function(feeling,index){
              var list = JSON.parse(props.list.emotion);
              // eslint-disable-next-line
              var total;
              for (var i in list){
                  total += list[i];
              }
              var score = (100 * list[feeling]).toFixed(2)
              return <Emotion key={index} feel={feeling.toUpperCase()} points={score}></Emotion>
            })}

          </ul>
           */}
        </ArticleEmotion>

        </LeftColumn>
        <RightColumn>
                <ArticleImage>
          <img className="article-images" src={props.list.urlToImage}  alt="news thumb"/>
        </ArticleImage>
        </RightColumn>
      </NewsArticle>
    </a>
	)

export default  AtricleListEntry 