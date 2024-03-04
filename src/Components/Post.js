// import './Post.css';

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Post() {

//   // const posts = [

//   // ]
//   return (
//     <div className="product-container">
//       <div className="product-gallery">
//         <div className="product-post">
//           <div className="product-image">
//             <img
//               alt="Prom Dress"
//               className="rounded-full"
//               src={require('../Assets/promdress.jpg')}
//               width={200}
//               height={200}
//             />
//           </div>
//           <div className="product-details">
//             <h1 className="product-title">Pink Prom Dress</h1>
//             <p className="product-author">By Selina Song</p>
//             <p className="product-date">August 3, 2023</p>
//             <p className="product-description">Description of Item.</p>
//           </div>
//         </div>

//         <div className="product-post">
//           <div className="product-image">
//             <img
//               alt="Nike Shoes"
//               className="rounded-full"
//               src={require('../Assets/nikeshoes.jpg')}
//               width={200}
//               height={200}
//             />
//           </div>
//           <div className="product-details">
//             <h1 className="product-title">Nike shoes</h1>
//             <p className="product-author">By Fiona Peng</p>
//             <p className="product-date">September 16, 2023</p>
//             <p className="product-description">Shoes description</p>
//           </div>
//         </div>

//         <div className="product-post">
//           <div className="product-image">
//             <img
//               alt="White Tee"
//               className="rounded-full"
//               src={require('../Assets/whitetee.jpg')}
//               width={200}
//               height={200}
//             />
//           </div>
//           <div className="product-details">
//             <h1 className="product-title">White Tee</h1>
//             <p className="product-author">By Sharon Chen</p>
//             <p className="product-date">March 2, 2024</p>
//             <p className="product-description">Baby tee description.</p>
//           </div>
//         </div>

//         <div className="product-post">
//           <div className="product-image">
//             <img
//               alt="Skirt"
//               className="rounded-full"
//               src={require('../Assets/skirt.jpg')}
//               width={200}
//               height={200}
//             />
//           </div>
//           <div className="product-details">
//             <h1 className="product-title">Skirt</h1>
//             <p className="product-author">By Cindy Ding</p>
//             <p className="product-date">March 2, 2024</p>
//             <p className="product-description">very slay skirt</p>
//           </div>
//         </div>

//         <div className="product-post">
//           <div className="product-image">
//             <img
//               alt="Suit"
//               className="rounded-full"
//               src={require('../Assets/suit.jpg')}
//               width={200}
//               height={200}
//             />
//           </div>
//           <div className="product-details">
//             <h1 className="product-title">AMAZING suit</h1>
//             <p className="product-author">By Carey Nachenberg</p>
//             <p className="product-date">March 2, 2024</p>
//             <p className="product-description">someone buy my suit pls</p>
//           </div>
//         </div>

//         <div className="product-post">
//           <div className="product-image">
//             <img
//               alt="Pants"
//               className="rounded-full"
//               src={require('../Assets/pants.jpg')}
//               width={200}
//               height={200}
//             />
//           </div>
//           <div className="product-details">
//             <h1 className="product-title">Pants</h1>
//             <p className="product-author">By Fiona Peng</p>
//             <p className="product-date">March 2, 2024</p>
//             <p className="product-description">Pants description</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// // Post.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Post.css';

// export default function Post() {
//   // Function to require images dynamically
//   const posts = [
//     { id: '1', title: 'Pink Prom Dress', author: 'Selina Song', date: 'August 3, 2023', description: 'Description of Item.', image: 'promdress.jpg' },
//     { id: '2', title: 'Nike Shoes', author: 'Fiona Peng', date: 'September 16, 2023', description: 'Shoes description', image: 'nikeshoes.jpg' },
//     { id: '3', title: 'White Tee', author: 'Sharon Chen', date: 'March 2, 2024', description: 'Baby tee description.', image: 'whitetee.jpg' },
//     { id: '4', title: 'Skirt', author: 'Cindy Ding', date: 'March 2, 2024', description: 'Very slay skirt', image: 'skirt.jpg' },
//     { id: '5', title: 'AMAZING suit', author: 'Carey Nachenberg', date: 'March 2, 2024', description: 'Someone buy my suit pls', image: 'suit.jpg' },
//     { id: '6', title: 'Pants', author: 'Fiona Peng', date: 'March 2, 2024', description: 'Pants description', image: 'pants.jpg' }
//   ];
  
//   const getImage = imageName => {
//       return require(`../Assets/${imageName}.jpg`);
//   };

//   return (
//     <div className="product-container">
//       <div className="product-gallery">
//         {posts.map(post => (
//           <Link to={`/post/${post.id}`} key={post.id} className="product-post">
//             <div className="product-image">
//               <img
//                 alt={post.title}
//                 className="rounded-full" // Maintain your rounded style
//                 src={getImage(post.imageName)}
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div className="product-details">
//               <h1 className="product-title">{post.title}</h1>
//               <p className="product-author">By {post.author}</p>
//               <p className="product-date">{post.date}</p>
//               <p className="product-description">{post.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// Post.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';


export default function Post() {

  const posts = [
    { id: '0', title: 'UCLA off the shoulder crewneck', size: 'M', description: 'crewneck student store - collar cut', price: 'Buy: $15', username: '@fionaxaria', date: 'February 16, 2024', image: 'ucla.jpg'},
    { id: '1', title: 'House of CB Prom dress', size: 'S', description: 'high quality pink floral design', price: 'Buy: $200, Rent: $70', username: '@selinasingsong', date: 'January 1, 2024', image: 'promdress2.jpg'},
    { id: '2', title: 'Supreme fire tee', size: 'L', description: 'Limited edition and amazing', price: 'Buy: $30', username: '@carynachenberg', date: 'December 25, 2023', image: 'supreme.jpg'},
    { id: '3', title: 'Platform Ugg Shoes', size: '7W', description: 'gently worn', price: 'Buy: $30', username: '@ssharonn.c', date: 'November 8, 2023', image: 'ugg.jpg'},
    { id: '4', title: 'Baggy Urban Outfitters cargo jeans', size: 'S', description: 'worn but in good quality', price: 'Buy: $33', username: '@cindydydingg', date: 'September 16, 2023', image: 'jeans.jpg'},
    { id: '5', title: 'High quality formal suit', size: 'M', description: 'amazing quality suit for formals', price: 'Buy: $100, Rent: $10', username: '@davidsmallberg', date: 'June 16, 2023', image: 'suit2.jpg'},
  ];

  return (
    <div className="product-container">
      <div className="product-gallery">
        {posts.map((post) => (
          <Link to={{pathname: `/post/${post.id}`}} key={post.id} className = "product-post">
              <div className="product-image">
                <img
                  alt={post.title}
                  className="rounded-full"
                  src={require(`../Assets/${post.image}`)} // Adjust the path as needed
                  width={200}
                  height={200}
                />
              </div>
              <div className="product-details">
                <div className="product-title">{post.title}</div>
                <p className="product-author">{post.username}</p>
                <p className="product-size">Size: {post.size}</p>
                <p className="product-description">{post.description}</p>
                <p className="product-price">Price: {post.price}</p>
                <p className="product-date">{post.date}</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}