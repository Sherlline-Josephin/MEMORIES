import * as api from '../api/index.js'; //import all from posts


//actions creators --are functions that retuen actions 

export const getPosts=()=> async(dispatch)=>{
    try{
        const { data } = await api.fetchPosts();

        dispatch({type: 'FETCH_ALL' , payload: data});
    }catch(error){
        console.log(error.message);
    }
    
    
};

export const createPost=(post)=>async(dispatch)=>{
    try{
        const { data } =await api.createPost(post);
        dispatch({type:'CREATE',payload:data});
    }catch(error){
        console.log(error.message);
    }
};

