import './App.css';
import { Button } from '@material-ui/core';
import News from './components/News/News';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [articles,setArticles] = useState([]);

  // useEffect(()=>{
  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f39ee1f6f38e49819a31260f6006ae0e';
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // },[])


  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f39ee1f6f38e49819a31260f6006ae0e';
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])

  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article =><News article={article}></News>)
      }
    </div>
  );
}

export default App;
