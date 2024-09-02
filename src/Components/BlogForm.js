import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogForm.css';


const BlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [featuredPost, setFeaturedPost] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postDesci, setPostDescri] = useState('');
  const [date, setDate] = useState('');
  const [about, setAbout] = useState('');
  const [Heading,setHeading]=useState('');
  const [subHeading, setSubHeading] = useState('');
  const [anotherBlogPost, setAnotherBlogPost] = useState('');
  const [newFeature, setNewFeature] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      description,
      featuredPost,
      postTitle,
      date: new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      about,
      Heading,
      subHeading,
      anotherBlogPost,
      newFeature,
      postDesci
    };
    onAddBlog(blog);
    navigate('/blogs');
  };

  return (
    <div className="blog-form-container">
      <h2>Submit a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Featured Post</label>
          <textarea value={featuredPost} onChange={(e) => setFeaturedPost(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Post Title</label>
          <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Post Description</label>
          <textarea value={postDesci} onChange={(e) => setPostDescri(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Heading</label>
          <input type="text" value={Heading} onChange={(e) => setHeading(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Sub Heading</label>
          <input type="text" value={subHeading} onChange={(e) => setSubHeading(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>About</label>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label>Another Blog Post</label>
          <textarea value={anotherBlogPost} onChange={(e) => setAnotherBlogPost(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label>New Feature</label>
          <textarea value={newFeature} onChange={(e) => setNewFeature(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
