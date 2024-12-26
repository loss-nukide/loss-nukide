import React from "react";

function Nav({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage("post-photo-form")}>新しい投稿</button>
      <button onClick={() => setPage("post-list")}>過去の投稿</button>
    </nav>
  );
}

export default Nav;
