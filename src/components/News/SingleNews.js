import React from 'react'

export const SingleNews = ({item})=>{


    return(


    <div className="col s3">

    <div className='card'>
        <div className="card-image">
            <img src={item.urlToImage} alt="" />
            <span  className="card-title">{item.source ? item.source.name:"none"}</span>
        </div>
        <div className="card-content">
            <p>
                {item.title}
            </p>

        </div>
        <div className="card-action">
            <a href={item.url} target="_blank">Full Article</a>


        </div>

    </div>

</div>
      
    )

} 