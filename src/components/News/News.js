import {React  ,useState} from 'react'
import { ReactDOM  } from 'react'
import {SingleNews} from './SingleNews'



export const News = ()=> {

    const [news , setNewsValue] = useState(["haile"]);

   const  renderItems =()=>{
        return news.map((eachnews , index)=>
                <SingleNews key={index} item={eachnews} />
     );
     }

     const getNews = ()  =>{
         const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=28b97d72f5144c86ba7d64a9e9892654';
          fetch(url)
         .then((response)=>{ return response.json()})
         .then((alldata)=>{
             setNewsValue(alldata['articles']);
             console.log(alldata['articles']);
         })
     }

        
    return (
        <div>
            <h1>My Feeds....</h1>
         <ul> {renderItems()}</ul>
            
            <button onClick={()=>getNews()}>seeNews</button>
        </div>
    )
    
              



}


