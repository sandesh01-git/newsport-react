import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'

export default function Readmore() {
    const {id} = useParams()
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

  return (
    <>
    {apiNewsData && apiNewsData.map((item,index)=>
    <div className='pagesreadmore'>
    {index == id && <>
        <div className="header-text">
            <h3>{item.title}</h3>
        </div>
        <div className="image-container">
            <img src={item.urlToImage} alt="" />
        </div>
        <div className="discription">
            <p>{item.content}</p>
        </div></>

    }

    </div>
    )}
    </>

  )
}
