import React, { useState } from 'react';

function PostDetailForm({ addPost, setPage }) {
  const [shopName, setShopName] = useState('');
  const [noodlesType, setNoodlesType] = useState('');
  const [vegetableType, setVegetableType] = useState('');
  const [garlicType, setGarlicType] = useState('');
  const [karameType, setKarameType] = useState('');
  const [aburaType, setAburaType] = useState('');
  const [postContent, setPostContent] = useState('');

  const handleSubmit = () => {
    if (shopName.trim() === '' || noodlesType.trim() === '' || vegetableType.trim() === '' || garlicType.trim() === '' || karameType.trim() === '' || aburaType.trim() === '' || postContent.trim() === '') {
      alert('すべてのフィールドを入力してください。');
      return;
    }
    addPost(shopName, noodlesType, vegetableType, garlicType, karameType, aburaType, postContent);
    setShopName('');
    setNoodlesType('');
    setVegetableType('');
    setGarlicType('');
    setKarameType('');
    setAburaType('');
    setPostContent('');
    setPage('post-photo-form'); // 投稿後に元の画面に戻る
  };

  return (
    <div id="post-detail-form" className="page">
      <h2>ラーメンの詳細を追加</h2>
      <input type="text" value={shopName} onChange={(e) => setShopName(e.target.value)} placeholder="店名を入力" />
      <input type="text" value={noodlesType} onChange={(e) => setNoodlesType(e.target.value)} placeholder="ラーメンの麺量を入力" />
      <input type="text" value={vegetableType} onChange={(e) => setVegetableType(e.target.value)} placeholder="野菜の量を入力" />
      <input type="text" value={garlicType} onChange={(e) => setGarlicType(e.target.value)} placeholder="ニンニクの量を入力" />
      <input type="text" value={karameType} onChange={(e) => setKarameType(e.target.value)} placeholder="カラメの量を入力" />
      <input type="text" value={aburaType} onChange={(e) => setAburaType(e.target.value)} placeholder="アブラの量を入力" />
      <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="ここにコメントを入力"></textarea>
      <button onClick={handleSubmit}>投稿</button>
    </div>
  );
}

export default PostDetailForm;