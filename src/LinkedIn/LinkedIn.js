import React, { useState } from 'react';
import './LinkedIn.css';

function LinkedIn() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Your Name', time: '2h', content: 'Excited to share my latest project built with React! 🚀' },
    { id: 2, author: 'Your Name', time: '1d', content: 'Just completed a new feature using React Router. Learning every day!' }
  ]);
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([{ id: Date.now(), author: 'Your Name', time: 'Just now', content: newPost }, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="linkedin-container">
      <div className="linkedin-header">
        <h1>LinkedIn Profile</h1>
      </div>
      
      <div className="linkedin-content">
        <div className="profile-section">
          <div className="profile-image">
            <div className="avatar">👤</div>
          </div>
          <h2>Your Name</h2>
          <p className="headline">Software Developer | React Enthusiast</p>
        </div>

        <div className="about-section">
          <h3>About</h3>
          <p>Passionate developer with expertise in React, JavaScript, and modern web technologies.</p>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Software Developer</h4>
            <p className="company">Company Name</p>
            <p className="duration">2020 - Present</p>
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">HTML</span>
          </div>
        </div>

        <div className="posts-section">
          <h3>Posts</h3>
          <div className="create-post">
            <textarea 
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What do you want to talk about?"
            />
            <button onClick={handleAddPost}>Post</button>
          </div>
          <div className="posts-list">
            {posts.map(post => (
              <div key={post.id} className="post-item">
                <div className="post-header">
                  <div className="post-avatar">👤</div>
                  <div>
                    <div className="post-author">{post.author}</div>
                    <div className="post-time">{post.time}</div>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedIn;
