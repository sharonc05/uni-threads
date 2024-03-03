import './Post.css';

import React, { useState } from 'react';

export default function Post() {
  return (
    <div className="product-container">
      <div className="product-gallery">
        <div className="product-post">
          <div className="product-image">
            <img
              alt="Prom Dress"
              className="rounded-full"
              src={require('../Assets/promdress.jpg')}
              width={120}
              height={120}
            />
          </div>
          <div className="product-details">
            <h1 className="product-title">Pink Prom Dress</h1>
            <p className="product-author">By Selina Song</p>
            <p className="product-date">August 3, 2023</p>
            <p className="product-description">Description of Item.</p>
          </div>
        </div>

        <div className="product-post">
          <div className="product-image">
            <img
              alt="Nike Shoes"
              className="rounded-full"
              src={require('../Assets/nikeshoes.jpg')}
              width={120}
              height={120}
            />
          </div>
          <div className="product-details">
            <h1 className="product-title">Nike shoes</h1>
            <p className="product-author">By Fiona Peng</p>
            <p className="product-date">September 16, 2023</p>
            <p className="product-description">Shoes description</p>
          </div>
        </div>

        <div className="product-post">
          <div className="product-image">
            <img
              alt="White Tee"
              className="rounded-full"
              src={require('../Assets/whitetee.jpg')}
              width={120}
              height={120}
            />
          </div>
          <div className="product-details">
            <h1 className="product-title">White Tee</h1>
            <p className="product-author">By Sharon Chen</p>
            <p className="product-date">March 2, 2024</p>
            <p className="product-description">Baby tee description.</p>
          </div>
        </div>

        <div className="product-post">
          <div className="product-image">
            <img
              alt="Skirt"
              className="rounded-full"
              src={require('../Assets/skirt.jpg')}
              width={120}
              height={120}
            />
          </div>
          <div className="product-details">
            <h1 className="product-title">Skirt</h1>
            <p className="product-author">By Cindy Ding</p>
            <p className="product-date">March 2, 2024</p>
            <p className="product-description">very slay skirt</p>
          </div>
        </div>

        <div className="product-post">
          <div className="product-image">
            <img
              alt="Suit"
              className="rounded-full"
              src={require('../Assets/suit.jpg')}
              width={120}
              height={120}
            />
          </div>
          <div className="product-details">
            <h1 className="product-title">AMAZING suit</h1>
            <p className="product-author">By Carey Nachenberg</p>
            <p className="product-date">March 2, 2024</p>
            <p className="product-description">someone buy my suit pls</p>
          </div>
        </div>

        <div className="product-post">
          <div className="product-image">
            <img
              alt="Pants"
              className="rounded-full"
              src={require('../Assets/pants.jpg')}
              width={120}
              height={120}
            />
          </div>
          <div className="product-details">
            <h1 className="product-title">Pants</h1>
            <p className="product-author">By Fiona Peng</p>
            <p className="product-date">March 2, 2024</p>
            <p className="product-description">Pants description</p>
          </div>
        </div>
      </div>
    </div>
  );
}


// function Post() {
//   const [formData, setFormData] = useState({
//     username: '',
//     image: '',
//     size: '',
//     clothingType: '',
//     description: ''
//   });

//   const [posts, setPosts] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add the new post to the existing posts array
//     const newPost = { ...formData };
//     setPosts([...posts, newPost]);
//     // Reset form data after submission (optional)
//     setFormData({
//       username: '',
//       image: '',
//       size: '',
//       clothingType: '',
//       description: ''
//     });
//   };

//   return (
//     <div>
//       <h2>Create a New Product Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Image URL:</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Size:</label>
//           <input
//             type="text"
//             name="size"
//             value={formData.size}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Type of Clothing:</label>
//           <input
//             type="text"
//             name="clothingType"
//             value={formData.clothingType}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {/* Display old product posts */}
//       <div>
//         <h2>Old Product Posts</h2>
//         {posts.map((post, index) => (
//           <div key={index}>
//             <h3>{post.username}</h3>
//             <img src={post.image} alt="Product" />
//             <p>Size: {post.size}</p>
//             <p>Type of Clothing: {post.clothingType}</p>
//             <p>Description: {post.description}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }
// export default Post;

