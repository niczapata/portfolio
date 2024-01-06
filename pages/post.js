import { useRouter } from "next/router"
import { posts } from "../profile"
import Layout from "../components/Layout"

const Post = () => {

  const router = useRouter()
  const currentPost = posts.filter(post => post.title === router.query.title)[0]

  return(
    <Layout footer={false} title={currentPost.title} >
      <div className="text-center">
        <img src={currentPost.imageURL} className="img-fluid" style={{width: '50%'}} />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  )

}

export default Post