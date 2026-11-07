import { useRouter } from "next/router";
import { posts } from "../profile";
import Layout from "../components/Layout";
import Link from "next/link";

/**
 * Post page: shows a single post selected via the `title` query parameter.
 */
const Post = () => {
  const router = useRouter();
  const currentPost = posts.find((post) => post.title === router.query.title);

  if (!currentPost) {
    return (
      <Layout footer={false} title="Post not found">
        <p className="text-center">
          <Link href="/blog">Back to the blog</Link>
        </p>
      </Layout>
    );
  }

  return (
    <Layout footer={false} title={currentPost.title}>
      <div className="text-center">
        <img src={currentPost.imageURL} className="img-fluid" style={{ width: "50%" }} alt={currentPost.title} />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;
