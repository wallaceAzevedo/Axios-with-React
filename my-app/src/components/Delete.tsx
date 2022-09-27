import React, { useState, useEffect } from "react"
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export function Delete() {
    const [post, setPost] = useState(undefined);

    useEffect(() => {
      axios.get(`${baseURL}/1`).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    function deletePost() {
      axios
        .delete(`${baseURL}/1`)
        .then(() => {
          setPost(undefined)
          alert("Post deleted!");
        });
    }

    return (<>
        <div>
            {post === undefined ? <p>Deletado</p> : (<div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={deletePost}>Delete Post</button>
            </div>)}
        </div>
    </>

    )
}