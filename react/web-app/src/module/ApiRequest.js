import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ApiRequest = (args) => {
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(args.url).then(res => {
      setPost(res.data)
    })
  }, []) // once only

  return(
    <div>
      <h3>STATUS</h3>
      <p>API Server: { post.Status }</p> 
      <p>Connect Database: { post.DB }</p> 
    </div>
  )
}

export default ApiRequest
