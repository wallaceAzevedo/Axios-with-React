import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {

  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  const [post, setPost] = useState(undefined);
  const [methods, seMethods] = useState (false);
  const [visivel, setVisivel] = useState<"first" | "FEED" >("first");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  const wall = () => {
    if (visivel === "first") {
      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )
    }
  }

  if (!post) return null;
  return (
    <div className="App">
      <button onClick={() => setVisivel('first')} >PRIMEIRO POST</button>
      {wall()}
    </div>
  );
}

export default App;
