import React from 'react'

const News = (props) => {
  return (
    <>
    <div className="news">
       <div className="news-img">
         {
            props.article.urlToImage!==null?<img src={props.article.urlToImage}/>:<img src='https://www.msi-viking.com/sca-dev-2023-1-0/img/no_image_available.jpeg'/>
         }
         {/* <img src={props.article.urlToImage}/> */}
       </div>
       <h1>{props.article.title}</h1>
       <p>{props.article.description?.substring(0,100).concat('...')}<a href={props.article.url}>Read More</a></p>
       
       <div className="source">
          <p>Author :{props.article.author}</p>
          <p>{props.article.source.name}</p>
       </div>
    </div>
    </>
  )
}

export default News