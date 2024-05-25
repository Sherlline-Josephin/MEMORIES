import React from 'react'
import Single from './SinglePost/Single'
import useStyles from './styles';
import { useSelector } from 'react-redux';


const Posts = () => {
  const posts=useSelector((state)=>state.posts)
  const classes=useStyles();

  console.log(posts);
  return (
    <>
    <h1>POSTS
      <Single/>
      <Single/>
     </h1>
    </>      
    
  )
}

export default Posts