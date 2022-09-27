import React, { useState, useEffect } from "react"
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export function PUT() {
    const [post, setPost] = useState(undefined);

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function updatePost() {
        axios
            .put(`${baseURL}/1`, {
                title: "Hello World!",
                body: "This is an updated post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    return (<>
        <div>
            {post === undefined ? <p>undefined</p> : (<div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={updatePost}>Update Post</button>
            </div>)}
        </div>
    </>
    )
}