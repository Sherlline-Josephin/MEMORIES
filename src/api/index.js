import axios from "axios";

const url='http://localhost:5000/posts';//returns the post in the db

export const fetchPosts=()=>axios.get(url);

//to dispatch the actions we use redux-->boiler plate codes


export const createPost=(newPost)=>axios.post(url,newPost);