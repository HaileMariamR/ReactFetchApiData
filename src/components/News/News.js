import {React  ,useState} from 'react'
import { ReactDOM  } from 'react'
import {SingleNews} from './SingleNews'
import axios from 'axios'



export const News = ()=> {

    const [news , setNewsValue] = useState(["haile"]);

   const  renderItems =()=>{
        return news.map((eachnews , index)=>
                <SingleNews key={index} item={eachnews} />
     );
     }

     const getNews = ()  =>{
         const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-07-13&to=2021-07-13&sortBy=popularity&apiKey=28b97d72f5144c86ba7d64a9e9892654';
          fetch(url)
         .then((response)=>{ return response.json()})
         .then((alldata)=>{
             setNewsValue(alldata['articles']);
             console.log(alldata['articles']);
         })
     }

     const getnewsbyaxiosmethod =()=>{
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-07-13&to=2021-07-13&sortBy=popularity&apiKey=28b97d72f5144c86ba7d64a9e9892654';
        axios.get(url)
            .then((response)=>{
                setNewsValue(response.data.articles);
               console.log(response.data.articles);

            });

     }
     

        
    return (
        <div>
         
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">My Feeds.....</a>
          
            </div>
        </nav>


            <div className='row'>
                 <ul> {renderItems()}</ul>
            </div>
            
            <button onClick={()=>getnewsbyaxiosmethod()}>seeNews</button>
        </div>
    )
    
              



}


