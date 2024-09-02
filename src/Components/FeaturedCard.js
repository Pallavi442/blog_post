import React from 'react';
import './PostCard.css';
import thumImg from './images.jpg';

function FeaturedCard({blogs}) {
    
  const formatDate = (dateString) => {
    console.log("dateString",dateString)
    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    
    <div className="post-card">
          {blogs.map((blog, index) => (
      <div className="post-content">
         <h6 style={{ color: 'blue' }}>Word</h6>
        <h2 className="post-title">Featured Post</h2>
        <p className="post-date">{formatDate(blog.date)}</p>
        <p className="post-description">{blog.featuredPost?blog.featuredPost:null}</p>
        <p style={{ color: 'blue' }}>Continue reading</p> 
      </div>
       ))}
     <img  className="post-thumbnail" src={thumImg} alt="Thumbnail" />             
    </div>
  );
}

export default FeaturedCard;
