import React from 'react';
import Emotion from './Emotion.jsx';
import moment from 'moment';



const AtricleListEntry = (props) => (
  <a href={props.list.url} target="_blank">
      <div className="news-article">
        <div className="article-heading">{props.list.title}</div>
        <div className="article-image">
          <img className="article-images" src={props.list.urlToImage}  alt="news thumb"/>
        </div>
        <div className="article-story">
          {props.list.description}          
          
        </div>
        <div className="article-emotion">
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
        </div>
        <div className="article-footer">

        Written by: {props.list.author}
        {" "}
        Published: {moment(props.list.publishedAt).format('DD-MMM-YYYY  hh:mm')}

        </div>
      </div>
    </a>
	)

export default  AtricleListEntry 