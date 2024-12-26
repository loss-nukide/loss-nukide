import React from "react";

function PostPhotoForm({ setImage, setPage }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div id="post-photo-form" className="page">
      <h2>ラーメンの写真を追加</h2>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button onClick={() => setPage("post-detail-form")}>決定</button>
    </div>
  );
}

export default PostPhotoForm;
