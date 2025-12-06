import React, { useState } from 'react';
import './LinkedInClone.css';

function LinkedInClone() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', title: 'Software Engineer at Tech Corp', time: '3h', content: 'Excited to announce that I just launched my new project! 🚀', likes: 45, comments: 12, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600' },
    { id: 2, author: 'Jane Smith', title: 'Product Manager', time: '5h', content: 'Great team meeting today. Innovation is key! 💡', likes: 32, comments: 8, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' },
    { id: 3, author: 'Mike Johnson', title: 'Full Stack Developer', time: '1d', content: 'Just completed a React course. Always learning! 📚', likes: 67, comments: 15, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600' }
  ]);
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim()) {
      setPosts([{ id: Date.now(), author: 'You', title: 'Your Title', time: 'Just now', content: postText, likes: 0, comments: 0 }, ...posts]);
      setPostText('');
    }
  };

  return (
    <div className="linkedin-clone">
      <header className="linkedin-header">
        <div className="header-content">
          <div className="logo">in</div>
          <input type="text" placeholder="Search" className="search-bar" />
          <nav className="header-nav">
            <div className="nav-item">🏠 Home</div>
            <div className="nav-item">👥 Network</div>
            <div className="nav-item">💼 Jobs</div>
            <div className="nav-item">💬 Messaging</div>
            <div className="nav-item">🔔 Notifications</div>
          </nav>
        </div>
      </header>

      <div className="main-content">
        <aside className="sidebar-left">
          <div className="profile-card">
            <div className="profile-cover"></div>
            <div className="profile-avatar">👤</div>
            <h3>Your Name</h3>
            <p className="profile-headline">Software Developer</p>
            <div className="profile-stats">
              <div>Connections <strong>500+</strong></div>
            </div>
          </div>
        </aside>

        <main className="feed">
          <div className="create-post-box">
            <div className="post-input-wrapper">
              <div className="post-avatar">👤</div>
              <input 
                type="text" 
                placeholder="Start a post" 
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handlePost()}
              />
            </div>
            <div className="post-actions">
              <button className="action-btn">📷 Photo</button>
              <button className="action-btn">🎥 Video</button>
              <button className="action-btn">📄 Article</button>
            </div>
          </div>

          {posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="post-avatar">👤</div>
                <div className="post-info">
                  <h4>{post.author}</h4>
                  <p className="post-title">{post.title}</p>
                  <p className="post-time">{post.time} • 🌐</p>
                </div>
              </div>
              <div className="post-content">{post.content}</div>
              {post.image && (
                <div className="post-image">
                  <img src={post.image} alt="Post" />
                </div>
              )}
              <div className="post-stats">
                <span>👍 {post.likes}</span>
                <span>{post.comments} comments</span>
              </div>
              <div className="post-actions-bar">
                <button className="action-btn">👍 Like</button>
                <button className="action-btn">💬 Comment</button>
                <button className="action-btn">🔄 Repost</button>
                <button className="action-btn">📤 Send</button>
              </div>
            </div>
          ))}
        </main>

        <aside className="sidebar-right">
          <div className="news-card">
            <h3>LinkedIn News</h3>
            <ul className="news-list">
              <li>Tech industry updates</li>
              <li>Remote work trends</li>
              <li>AI developments</li>
              <li>Career growth tips</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default LinkedInClone;
