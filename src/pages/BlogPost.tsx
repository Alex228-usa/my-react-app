import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface BlogPost {
  id: number;
  title: string;
  text: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`/api/blog/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
    </div>
  );
}

export default BlogPost;
