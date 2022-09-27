import React, { useState } from "react";

import './App.css';
import { PUT } from "./components/Put";
import { GetFirst } from "./components/GetFirst";
import { Post } from "./components/Post";
import { Delete } from "./components/Delete";

function App() {

  const [visivel, setVisivel] = useState<"post first" | "post" | "" | "put" | "delete">("");

  return (
    <div className="App">
      <button onClick={() => setVisivel('post first')} >PRIMEIRO POST</button>
      <button onClick={() => setVisivel('post')} >Criar um POST</button>
      <button onClick={() => setVisivel('put')} >Criar um PUT</button>
      <button onClick={() => setVisivel('delete')} >Deletar um post</button>
      {visivel === 'post first' && <GetFirst />}
      {visivel === 'post' && <Post />}
      {visivel === 'put' && <PUT />}
      {visivel === 'delete' && <Delete />}
    </div>
  );
}

export default App;
