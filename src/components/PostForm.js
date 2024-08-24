import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostForm = () => {
  const { id } = useParams();  // Get the route parameter
  const navigate = useNavigate();  // Hook to programmatically navigate
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      // Fetch the post details if an id is present (edit mode)
      fetch(`/posts/${id}`)
        .then(response => response.json())
        .then(data => {
          setTitle(data.title);
          setContent(data.content);
        })
        .catch(error => setError('Failed to fetch post details'));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/posts/${id}` : '/posts';
    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
      .then(response => {
        if (response.ok) {
          navigate('/');
        } else {
          setError('Failed to save post');
        }
      })
      .catch(() => setError('Failed to save post'));
  };

  return (
    <div>
      <h1>{id ? 'Edit Post' : 'Create Post'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PostForm;
