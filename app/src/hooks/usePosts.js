import { useEffect, useState } from 'react';
import { api } from '../services/api.js';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await api.getPosts();
        setPosts(data);
      } catch (err) {
        console.log('API Error:', err);
        setError('Unable to load posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { posts, isLoading, error };
};
