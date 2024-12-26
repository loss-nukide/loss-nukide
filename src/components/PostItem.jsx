import React from 'react';

function PostItem({ post }) {
  return (
    <div className="post">
      <h3>{post.shopName}</h3>
      <h4>{post.noodlesType}</h4>
      <h4>{post.vegetableType}</h4>
      <h4>{post.garlicType}</h4>
      <h4>{post.karameType}</h4>
      <h4>{post.aburaType}</h4>
      <p>{post.postContent}</p>
      {post.image && <img src={post.image} alt="投稿画像" className="post-image" />}
    </div>
  );
}

export default PostItem;