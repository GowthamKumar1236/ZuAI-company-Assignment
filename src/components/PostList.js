import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
  state = {
    posts: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) =>
        this.setState({ posts: data.data, loading: false })
      )
      .catch((error) =>
        this.setState({ error, loading: false })
      );
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
