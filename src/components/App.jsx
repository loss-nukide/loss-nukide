import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Nav from './Nav';
import PostPhotoForm from './PostPhotoForm';
import PostDetailForm from './PostDetailForm';
import PostList from './PostList';

function App() {
  const [page, setPage] = useState('post-photo-form');
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const addPost = (shopName, noodlesType, vegetableType, garlicType, karameType, aburaType, postContent) => {
    const newPost = { shopName, noodlesType, vegetableType, garlicType, karameType, aburaType, postContent, image };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const clearPosts = () => {
    localStorage.removeItem('posts');
    setPosts([]);
  };

  return (
    <div className="App">
      <Header />
      <Nav setPage={setPage} />
      {page === 'post-photo-form' && <PostPhotoForm setImage={setImage} setPage={setPage} />}
      {page === 'post-detail-form' && <PostDetailForm addPost={addPost} setPage={setPage} />}
      {page === 'post-list' && <PostList posts={posts} clearPosts={clearPosts} />}
    </div>
  );
}

export default App;