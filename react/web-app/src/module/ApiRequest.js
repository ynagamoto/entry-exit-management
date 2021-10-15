import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ApiRequest = ({ url }) => {
  const [post, setPost] = useState([])
  // const url = 'http://chat.192.168.99.109.nip.io'

  console.log(url)
  useEffect(() => {
    axios.get(url).then(res => {
      setPost(res.data)
      console.log(res.data)
    })
  }, [url]) // once only

  return(
    <div>
      <h3>STATUS</h3>
      <p>{ url }</p>
      <p>API Server: { post.Status }</p> 
      <p>Connect Database: { post.DB }</p> 
      <p>Raw Data: { post }</p>
    </div>
  )
}

export default ApiRequest
