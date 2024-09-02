import React from 'react';
import './BlogList.css';
import PostCard from './PostCard';
import FeaturedCard from './FeaturedCard';
function BlogList({ blogs }) {


  //To formate data
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
    <div className="BlogList">
    {blogs.map((blog, index) => (
    <div> 
      <header className="site-header">
        <div className="container">
          <div className="header-top">
          
            <div className="header-right">
              <div className="search-subscribe">
                <button className="subscribe-button">Subscribe</button>
              </div>
              <h1 className="site-title">Large</h1>
              <button className="sign-in-button">Sign up</button>
            </div>
          </div>
          <nav className="navbar">
            <ul  className="nav-links">
              <li>World</li>
              <li>U.S.</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Culture</li>
              <li>Business</li>
              <li>Politics</li>
              <li>Opinion</li>
              <li>Science</li>
              <li>Health</li>
              <li>Style</li>
              <li>Travel</li>
            </ul>
          </nav>

        </div>
        
      </header>
      

      <main className="container">
        <section className="featured-post">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <a href="#" className="btn">Continue reading...</a>
        </section>

        <section className="post-thumbnails">
          <FeaturedCard blogs={blogs}/>
          <PostCard blogs={blogs}/>
        </section>

        <section className="blog-posts">
          <h2>From the Firehose</h2>
          
          <article className="post">
            <h2>Sample Blog Post</h2>
            <p className="meta">{formatDate(blog.date)}</p>
            <h4>{blog.Heading?blog.Heading:null}</h4>
            <p>{blog.description}</p>
            <h3>{blog.subHeading?blog.subHeading:null}</h3>
            <p>{blog.description}</p>
          </article>
          
          <article className="post">
            <h3>Another blog post</h3>
            <p className="meta">{formatDate(blog.date)}</p>
            <p>{blog.anotherBlogPost?blog.anotherBlogPost:null}</p>
          </article>
          
          <article className="post">
            <h3>New feature</h3>
            <p className="meta">{formatDate(blog.date)}</p>
            <p>{blog.newFeature?blog.newFeature:null}</p>
          </article>
        </section>
        
        <aside className="sidebar">
          <section className="about">
            <h3>About</h3>
            <p>{blog.about?blog.about:null}</p>
          </section>

          <section className="archives">
            <h3>Archives</h3>
            <ul>
              <li>March 2014</li>
              <li>February 2014</li>
              <li>January 2014</li>
              <li>December 2014</li>
              <li>October 2014</li>
              <li>July 2014</li>
            </ul>
          </section>
          
          <section className="archives">
            <h3>Elsewhere</h3>
            <ul>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </section>
        </aside>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by @mdo.</p>
          <p><a href="#">Back to top</a></p>
        </div>
      </footer>
      </div>    ))}
    </div>
  );
}

export default BlogList;
