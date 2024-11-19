// src/components/BlogList.js
import React from 'react';
import blogPosts from '../blogData';

function BlogList() {
  return (
    <div>
      <h2>Blog Posts</h2>
      {blogPosts.map(post => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p><strong>Date:</strong> {post.date}</p>
          <p><strong>Author:</strong> {post.author}</p>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
