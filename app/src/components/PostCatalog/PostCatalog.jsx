import PostItem from '../PostItem';
import { usePosts } from '../../hooks/usePosts.js';

const PostCatalog = () => {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Post Archive</h2>
      <ul className="list-group list-group-flush">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostCatalog;
