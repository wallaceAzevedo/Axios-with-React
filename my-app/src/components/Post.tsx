import React, { useState, useEffect } from "react"
import axios from "axios";

const baseURLCREATEPOST = "https://jsonplaceholder.typicode.com/posts";

export function Post() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleChangeTitle = (event) => setTitle(event.target.value)
  const handleChangeBody = (event) => setBody(event.target.value)
  const [createPosts, setCreatePosts] = useState(undefined);

  // Create a Post
  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get(`${baseURLCREATEPOST}/1`).then((response) => {
          setCreatePosts(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();

  }, []);

  function createPost() {
    axios
      .post(baseURLCREATEPOST, {
        title: title,
        body: body
      })
      .then((response) => {
        setCreatePosts(response.data);
      });
  }

  return (<>
    {createPosts === undefined ? <p>undefined</p> : (<div>
      <input
        value={title}
        onChange={handleChangeTitle}
        placeholder='Títle'
      />
      <input
        value={body}
        onChange={handleChangeBody}
        placeholder='Body'
      />
      <button onClick={createPost}>Post</button>
      <p>{createPosts.title}</p>
      <p>{createPosts.body}</p>
    </div>)}
  </>

  )
}