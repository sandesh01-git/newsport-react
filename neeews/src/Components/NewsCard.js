import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function NewsCard() {
  const [apiNewsData, setApiNewsData] = useState()
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=tesla&from=2022-12-15&to=2022-12-15&apiKey=f357c87c0ee34d298f75d606f633b3bb',
        )

        if (response) {
          setApiNewsData(response.data.articles)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])
  console.log(apiNewsData)
  return (
    <>
  
      {apiNewsData &&
        apiNewsData.map((item,index) => (
          <>
          {index<24&&       
              <div className='col-md-4'>
            
            <div className="newsCard">
              <div className="image-container">
                <img
                  src={item.urlToImage}
                  alt=""
                />
              </div>
              <div className="content">
                <div className="card-title">
                  <h1>{item.title}</h1>
                </div>
                <div className="text-container">
                  <p className='overflow-ellipsis'>
                    {item.content}
                  </p>
                </div>
                <div className="card-footer">
                 
                      <Link to={`readmore/${index}`} >
                      Read More
                             <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </span>
                      </Link>
                   
             
                  
                </div>
              </div>
            </div>
            </div>}
          </>

        ))}

    </>
  )
}
