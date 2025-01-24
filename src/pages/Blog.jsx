import axios from "axios"
import { useState, useEffect } from "react"

const Blog = () => {
  const apiUrl = "http://localhost:3000"
  const [postsList, setPostsList] = useState(null)

  const fetchData = () => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        setPostsList(res.data)
      })
      .catch(err => {
        console.error(`Errore nel caricamento: ${err}`);
      })
  }

  console.log(postsList);


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="container">
      <h1>Ricette salvate:</h1>
      <ul>
        {postsList?.map(post => (

          <li className="d-flex justify-between">
            <span className="titolo">{post.title}</span>
            <span>
              <a href="#">mostra dettagli</a>
              <button><i className="fa-solid fa-trash-can"></i></button>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Blog
