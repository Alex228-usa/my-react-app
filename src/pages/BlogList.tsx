import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogPost {
  id: number;
  title: string;
  text: string;
}

const BlogList: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('/api/blog');
        setBlogPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
