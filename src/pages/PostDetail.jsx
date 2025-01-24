import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const PostDetail = () => {

  const apiUrl = "http://localhost:3000"
  const { id } = useParams();
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
            <div className="img">
              <img src={post?.image} alt={post?.title} />
            </div>
            <div className="txt d-flex column">
              <p className="content">{post?.content}</p>
              <div className="tags">{post?.tags.join(', ')}</div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default PostDetail
