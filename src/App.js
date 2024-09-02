import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import BlogList from './Components/BlogList';
import BlogForm from './Components/BlogForm';


const App = () => {
    const [blogs, setBlogs] = useState([]);

    const addBlog = (blogPost) => {
        setBlogs([...blogs, blogPost]);
    };

    return (
      <>
            <Routes>
                <Route path="/blogs" element={<BlogList blogs={blogs} />} />
                <Route path="/" element={<BlogForm onAddBlog={addBlog} />} />
            </Routes>
      </>
          
     
    );
};

export default App;
