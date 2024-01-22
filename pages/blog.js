import Link from "next/link";
import Layout from "../components/Layout";

import { posts } from "../profile";

/**
 * `PostCard` is a functional component that displays a post in a card layout.
 *
 * It receives a `post` object as a prop that contains the following properties: 
 * `imageURL` for the image source, `title` for the post title, and `content` for the post content.
 *
 * Each `PostCard` is displayed in a column that spans 4 columns in a grid layout (col-md-4).
 * The post image is displayed at the top of the card, with the title and content below it.
 * There is also a 'Read' button that, when clicked, redirects the user to the detailed post page.
 *
 * @param {Object} props - The properties passed to the component, expected to contain a `post` object.
 * @param {Object} props.post - The post object.
 * @param {string} props.post.imageURL - The URL of the post's image.
 * @param {string} props.post.title - The title of the post.
 * @param {string} props.post.content - The content of the post.
 *
 * @returns {JSX.Element} A card layout containing the post's image, title, content, and a 'Read' button.
 */
const PostCard = ({ post: { imageURL, title, content } }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <img src={imageURL} alt={title} className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{title}</h1>
        <p>{content}</p>
        <Link href={`/post?title=${title}`} as={`/post/${title}`}>
          <a className="btn btn-light">Read</a>
        </Link>
      </div>
    </div>
  </div>
);


/**
 * The `blog` component is a functional component in React.
 *
 * This component returns a `Layout` component, with a title of "My Blog", 
 * a dark theme, and with the footer hidden. Inside this layout, it maps 
 * through an array of `posts` and for each post, it renders a `PostCard` 
 * component, passing the post as a prop and using the index as a key.
 *
 * @returns {JSX.Element} A `Layout` component containing multiple `PostCard` components.
 */
const blog = () => {
  return (
    <Layout 
      title="My Blog" 
      footer={false} 
      dark
    >
      <div className="row">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
};


export default blog;
