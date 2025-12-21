import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { PostsProvider, usePosts } from "./context/PostsContext";
import ThemeToggle from "./components/ThemeToggle";
import PostCard from "./components/PostCard";
import './App.css';

const PostList=()=>{
  const {posts}=usePosts();
  return(
    <div className="post-grid">
      {posts.map(post=> <PostCard key={post.id} post={post}/>)}
    </div>
  );
};

function App(){
  return(
    <ThemeProvider>
      <PostsProvider>
        <header>
          <h1>Post Manager</h1>
          <ThemeToggle/>
        </header>
        <PostList/>
      </PostsProvider>
    </ThemeProvider>
  );
}

export default App;