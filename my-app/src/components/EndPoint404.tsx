import React, { useState, useEffect } from "react"
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export function EndPoint404() {
    const [post, setPost] = React.useState(undefined);
    const [error, setError] = React.useState(undefined);

    React.useEffect(() => {
        // invalid url will trigger an 404 error
       try{
        axios.get(`${baseURL}/asdf`).then((response) => {
            setPost(response.data);
        }).catch(error => {
            setError(error);
        });
       }catch(error){
        console.log(error.message)
       }
    }, []);


    return (<>
        <div>
            {post === undefined ? <p>undefined</p> : (<div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>)}
        </div>
    </>
    )
}