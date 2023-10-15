import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getApiData()
      .then((res) => res.json())
      .then((res) => setPost(res))
  }, [])


  function getApiData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    return fetch(apiUrl);
  }
  console.log(post);


  return (
    <div className="App">


      {
        post.map((item, index) => {
          return <>
            <span key={index}>{item.id}</span>
            <span >{item.body}</span>
            <span>{item.title}</span>

          </>

        })
      }


    </div>
  );
}

export default App;
