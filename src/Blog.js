import React, { useState, useEffect } from 'react';
import butter from './butter-client';
import PostSnippet from './PostSnippet';

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await butter.post.list({page: 1, page_size: 10});
      setData(response.data);
    } catch(e) {
      setError(`There was an error: ${e.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getContent = () => {
    if ( loading ) return <p>Fetching posts...</p>;
    if ( error ) return <p>{error}</p>;
    if ( !data ) return null;
    return getPosts();
  }

  const getPosts = () => (
    <div>
      {data.data.map((post, i) => (
        <PostSnippet {...post} key={i} />
      ))}
    </div>
  );
  
  console.log(data);

  return (
    <div>
      <h1>Blog</h1>
      {getContent()}
    </div>
  );
}

export default Blog;