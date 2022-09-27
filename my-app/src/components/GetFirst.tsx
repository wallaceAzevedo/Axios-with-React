import React, { useState, useEffect } from "react"
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export function GetFirst() {
    const [post, setPost] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
          try {
            await axios.get(baseURL).then((response) => {
              setPost(response.data);
            });
          } catch (error) {
            console.log(error);
          }
        };
        getData();
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