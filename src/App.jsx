import React from 'react';
import Newsmenu from './Newsmenu.jsx';
import Articles from './Articles.jsx';
import * as firebase from 'firebase';
import styled from 'styled-components';
import config from './config.js'
import Header from './Header.jsx'
import {arrayMove} from 'react-sortable-hoc';
import '../public/android-chrome-192x192.png'
import '../public/android-chrome-512x512.png'
import '../public/apple-touch-icon.png'
import '../public/favicon-16x16.png'
import '../public/favicon-32x32.png'
import '../public/jsn.ico'
import '../public/mstile-150x150.png'
import '../public/browserconfig.xml'
import '../public/safari-pinned-tab.svg'
import '../public/manifest.json'

const Menu = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  
  @media only screen and (min-width: 320px)  { 
    width: 90%;
    overflow: auto;
    white-space: nowrap;
    padding-bottom: 20px;
  }
  @media only screen and (min-width: 768px)  {   
    width: 700px;
  } 
  @media only screen and (min-width: 1024px) { 
    width: 700px; 
  }
`




var database;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "thumbs": [],
      "articles" : [],
      "outlet":[],
    };
    this.chooseNews = this.chooseNews.bind(this)
    this.getFirebase = this.getFirebase.bind(this)
    this.getFirebaseNews = this.getFirebaseNews.bind(this)
    this.configureFirebase = this.configureFirebase.bind(this)
    this.onSortEnd = this.onSortEnd.bind(this)
    this.updateLocalStorage = this.updateLocalStorage.bind(this)
   
  }  

  onSortEnd({oldIndex, newIndex}){
    this.setState({
      thumbs: arrayMove(this.state.thumbs, oldIndex, newIndex),
    });
    var data = this.state.thumbs;
    localStorage.setItem('newsOutLets', JSON.stringify({data}))
  };

  configureFirebase(){
    firebase.initializeApp(config);
    database = firebase.database();
  }

  getFirebase(){ 

    
    if (localStorage.getItem('newsOutLets') !== null){
      var dataLocal = JSON.parse(localStorage.getItem('newsOutLets'))
      console.log(dataLocal)
      setTimeout(function(){
       this.setState({'thumbs': dataLocal.data})
      }.bind(this),50)
      
    } else {
    var ref = database.ref('/outlets/').orderByKey()
    ref.once('value')
      .then(function(snapshot){
        var data = []
        var count = 0;
        snapshot.forEach(x =>{
        var url = x.val()
        var outlet = x.key
        var obj = {'outlet': outlet,'image': url, 'ind':count}
          data.push(obj)
          count ++
        })
        return data
      }).then(function(data){
      console.log(data)  
      this.setState({'thumbs':data})
      localStorage.setItem('newsOutLets', JSON.stringify({data}))
      }.bind(this))
    }
  }

updateLocalStorage(){
    var data = []
    var ref = database.ref().orderByKey()
    ref.once('value')
      .then(function(snapshot){
        snapshot.forEach(x =>{
          if (x.val().articles !== undefined){
            data.push(x.val())
          }
        })
        return data
      }).then(function(data){
      this.setState({'articles':data})
      this.setState({'outlet': this.state.articles[1].articles})
      localStorage.setItem('newsArticles', JSON.stringify({data}))
      }.bind(this))
}

getFirebaseNews(){ 
  var data = []
    if (localStorage.getItem('newsArticles') !== null){
      var dataLocal = JSON.parse(localStorage.getItem('newsArticles'))
      setTimeout(function(){
        dataLocal.data.forEach(x =>{
          if (x.articles !== undefined){
            data.push(x)
          }
        })
      this.setState({'articles':data})
      this.setState({'outlet': this.state.articles[1].articles}) 
      }.bind(this),10)
    } else {
     this.updateLocalStorage()
    }
    var callToken = database.ref('/token/num/').orderByKey()

    callToken.once('value')
      .then(function(snapshot){
    var token = snapshot.node_.value_
    console.log(token)    
    var localToken = localStorage.getItem('token')
    if (localToken !== null && localToken !== token ){
      localStorage.setItem('token', token)
      this.updateLocalStorage()
    } else if (localToken === null){
      localStorage.setItem('token', token)
      this.updateLocalStorage()
    } 
    }.bind(this)); 
  }

  componentWillMount() {
    this.configureFirebase()
    this.getFirebase();
    this.getFirebaseNews();
    this.setState({'thumbs':["http:\//gifimage.net/wp-content/uploads/2017/08/loading-gif-transparent-4.gif"]});
    this.setState({'axis': 'x'})
  }

  chooseNews(data){
    var outlet = data.outlet
    this.state.articles.forEach(function(x){
      console.log(x)
      if(x.source === outlet){
        console.log('hit 1')
      this.setState({'outlet': x.articles})
      }
    }.bind(this))
    
  }
  render() {
      return (
        <div>
        <Header/>
        <Menu>
          <div>
            <Newsmenu 
            thumbs={this.state.thumbs} 
            onSortEnd={this.onSortEnd} 
            onSortMove={this.onSortMove} 
            chooseNews={this.chooseNews}
            axis="x"
            helperClass="drag"
            pressDelay={200}
            />
          </div>
        </Menu>
        <Articles articles={this.state.outlet}/>

        </div>
      )
  }
}
export default App;