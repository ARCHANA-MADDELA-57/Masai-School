import React, {createContext, useEffect, useState, useContext} from "react";

const PostsContext = createContext();
export const PostsProvider = ({children})=>{
    const [posts, setPosts]=useState([]);

    //1.Fetch Posts on Load
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data.slice(0,20))); //Limit to 20
    },[]);
     //Update Post (Modify state directly, no re-fetch)
      const updatePost =(id, updatedData)=>{
        setPosts(posts.map(post=>post.id===id?{...post,...updatedData}:post));
      };

      //Delete Post
      const deletePost =(id)=>{
        setPosts((prevPosts)=>prevPosts.filter(post=>post.id!==id));
      };

      return(
        <PostsContext.Provider value={{posts, updatePost,deletePost}}>
            {children}
        </PostsContext.Provider>
      );
};

export const usePosts=()=>useContext(PostsContext);
