import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, clearPosts }) {
  return (
    <div id="post-list" className="page">
      <h2>ラーメン記録一覧</h2>
      <button onClick={clearPosts}>履歴を消す</button>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
}

export default PostList;
