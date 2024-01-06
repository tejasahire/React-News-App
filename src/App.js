import './App.css';
import News from './News';
import{useEffect, useState} from 'react'

function App() {
  let[articles,setarticles]=useState([])
let [category,setcategory]=useState('india')

useEffect(()=>{
  fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-25&apiKey=7088df025e884b12ac937b4afc45ee9b`)
  .then((response)=>response.json())
  .then((news)=>{
    setarticles(news.articles)
    console.log(news.articles)
  })
  .catch((error)=>{
console.log(error)
  })
},[category])

  return (
    <div className="App">
       <header className='header'>
        
        <h1>News App</h1>
        <input type='text' placeholder='Search News' onChange={(event)=>{
          if(event.target.value!==''){
            setcategory(event.target.value)
          }else{
            setcategory('india')
          }
        }}/>


      </header>
      <section className='news-articles'>
      {
        articles.length!==0?
        articles.map((article)=>{
          return(
            <News article={article}/>
          )
        })
        :
        <h1>No News Found</h1>
      }
      </section>
     
    </div>
  );
}

export default App;
