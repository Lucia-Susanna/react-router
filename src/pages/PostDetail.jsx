import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const PostDetail = () => {

  const apiUrl = "http://localhost:3000"
  const { id } = useParams();
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  // const [pizza, setPizza] = useState

  const fetchPost = () => {
    // console.log('funziono');

    axios.get(`${apiUrl}/posts/${id}`)
      .then(res => {
        // console.log(res.data);
        setPost(res.data)
      })
      .catch(err => {
        console.error(err)
      })

  }

  useEffect(() => {
    fetchPost()
  }, [])



  return (
    <section className="detail">
      <div className="container">
        <div className="card">
          <h1>{post?.title}</h1>
          <div className="d-flex">
            <div className="img d-flex">
              <img src={post?.image} alt={post?.title} />
            </div>
            <div className="txt d-flex column">
              <div className="content">
                <span className="bold">Descrizione: </span>
                <span>{post?.content} lorem300</span>
              </div>
              <div className="tags">
                <span className="bold">Tags: </span>
                <span>{post?.tags.join(', ')}</span>
              </div>
            </div>

          </div>
        </div>
        <div className="back">
          <button
            onClick={() => navigate(-1)}
          >
            Torna all'elenco
          </button>
        </div>
      </div>

    </section>
  )
}

export default PostDetail
