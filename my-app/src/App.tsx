import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {

  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  const baseURLCREATEPOST = "https://jsonplaceholder.typicode.com/posts";

  const [post, setPost] = useState(undefined);
  const [visivel, setVisivel] = useState<"first" | "create post" | "">("");
  const [createPosts, setCreatePosts] = useState(undefined);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleChangeTitle = (event) => setTitle(event.target.value)
  const handleChangeBody = (event) => setBody(event.target.value)

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

  const wall = () => {
    if (visivel === "first") {
      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )
    }
    if (visivel === "create post") {
      return (
        <div>
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
          <button onClick={createPost}>Create Post</button>
          <p>{createPosts.title}</p>
          <p>{createPosts.body}</p>
        </div>
      )
    }
  }


  return (
    <div className="App">
      <button onClick={() => setVisivel('first')} >PRIMEIRO POST</button>
      <button onClick={() => setVisivel('create post')} >Criar um POST</button>
      {wall()}
    </div>
  );
}

export default App;
