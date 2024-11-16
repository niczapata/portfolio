import { useRouter } from "next/router"
import { posts } from "../profile"
import Layout from "../components/Layout"

/**
 * Post component
 * 
 * This component displays the content of a single post.
 */

const Post = () => {
  // Get the router object for navigation
  const router = useRouter();
  
  // Find the current post based on the title from the router query
  //const currentPost = posts.find(post => post.title === router.query.title);
  //
  //// Return the layout with the current post content
  //return (
  //  <Layout footer={false} title={currentPost.title} >
  //    <div className="text-center">
  //      <img src={currentPost.imageURL} className="img-fluid" style={{width: '50%'}} />
  //      <p>{currentPost.content}</p>
  //    </div>
  //  </Layout>
  //);
}

export default Post
