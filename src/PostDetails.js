// PostDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css'; // Your CSS file for styling

const PostDetails = () => {
  
    const posts = [
        { id: '0', title: 'UCLA off the shoulder crewneck', size: 'M', description: 'crewneck from student store - collar cut', price: 'Buy: $15', username: '@fionaxaria', date: 'February 16, 2024', image: 'ucla.jpg'},
        { id: '1', title: 'House of CB Prom dress', size: 'S', description: 'high quality pink floral design', price: 'Buy: $200, Rent: $70', username: '@selinasingsong', date: 'January 1, 2024', image: 'promdress2.jpg'},
        { id: '2', title: 'Supreme fire tee', size: 'L', description: 'Limited edition and amazing', price: 'Buy: $30', username: '@carynachenberg', date: 'December 25, 2023', image: 'supreme.jpg'},
        { id: '3', title: 'Platform Ugg Shoes', size: '7W', description: 'gently worn', price: 'Buy: $30', username: '@ssharonn.c', date: 'November 8, 2023', image: 'ugg.jpg'},
        { id: '4', title: 'Baggy Urban Outfitters cargo jeans', size: 'S', description: 'worn but in good quality', price: 'Buy: $33', username: '@cindydydingg', date: 'September 16, 2023', image: 'jeans.jpg'},
        { id: '5', title: 'High quality formal suit', size: 'M', description: 'amazing quality suit for formal advances', price: 'Buy: $100, Rent: $10', username: '@davidsmallberg', date: 'June 16, 2023', image: 'suit2.jpg'},
      ];

  const { id } = useParams();

  const post = posts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
        <div className="post-details-container">
        <div className="post-details-header">
            <img
            alt={post.title}
            src={require(`./Assets/${post.image}`)} // Adjust the path as needed
            className="post-details-image"
            />
            <h1 className="post-details-title">{post.title}</h1>
        </div>
        <div className="post-details-content">
            <p><strong>Username:</strong> {post.username}</p>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Size:</strong> {post.size} </p>
            <p><strong>Date:</strong> {post.date}</p>
            <p><strong>Price:</strong> {post.price} </p>
        </div>
        </div>
    </div>
  );
};

export default PostDetails;