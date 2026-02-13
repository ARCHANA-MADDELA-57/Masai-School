import { useState } from "react";
import { usePosts } from "../context/PostsContext";

const PostCard=({post})=>{
    const {updatePost, deletePost}=usePosts();
    const [isEditing, setIsEditing]=useState(false);
    const [editData, setEditData]=useState({title:post.title, body:post.body});

    const handleSave=()=>{
        updatePost(post.id, editData);
        setIsEditing(false);
    };

    return(
        <div className="card">
            {isEditing?(
                <><input value={editData.title} onChange={(e)=>setEditData({...editData,title:e.target.value})}
                />
                <textarea value={editData.body} onChange={(e)=>setEditData({...editData,body:e.target.value})}
                />
                <button onClick={handleSave}>Save</button>
                </>
            ):(
                <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={()=>setIsEditing(true)}>Edit</button>
                <button onClick={()=>deletePost(post.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default PostCard;