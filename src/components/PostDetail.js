import React, { Component } from 'react';

class PostDetail extends Component {
  state = {
    post: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://localhost:5000/posts/${id}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ post: data.data, loading: false })
      )
      .catch((error) =>
        this.setState({ error, loading: false })
      );
  }

  render() {
    const { post, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    if (!post) {
      return <p>No post found</p>;
    }

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDetail;
