import React, { useState, useEffect, useRef } from 'react';
import './LinkedInClone.css';

function LinkedInClone() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', title: 'Software Engineer at Tech Corp', time: '3h', content: 'Excited to announce that I just launched my new project! 🚀', likes: 45, comments: 12, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600' },
    { 
      id: 2, 
      author: 'Jane Smith', 
      title: 'Product Manager', 
      time: '5h', 
      content: 'Amazing product launch event! Here are some highlights from our presentation and demo. Swipe to see more! 🎉🚀', 
      likes: 156, 
      comments: 42,
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600' },
        { type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' }
      ]
    },
    { id: 3, author: 'Mike Johnson', title: 'Full Stack Developer', time: '1d', content: 'Great team meeting today. Innovation is key! 💡', likes: 32, comments: 8, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600' },
    {
      id: 4,
      author: 'Alex Chen',
      title: 'Tech Lead at Innovation Labs',
      time: '12h',
      content: 'Our team\'s journey from concept to deployment! Check out these amazing moments 💻✨',
      likes: 203,
      comments: 56,
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600' },
        { type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600' }
      ]
    },
    { id: 5, author: 'Sarah Lee', title: 'UX Designer', time: '2d', content: 'Just completed a React course. Always learning! 📚', likes: 67, comments: 15, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600' }
  ]);
  const [postText, setPostText] = useState('');
  const [carouselIndex, setCarouselIndex] = useState({});
  const [autoSlideEnabled, setAutoSlideEnabled] = useState({});
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [posts]);

  const handleCarouselNav = (postId, direction) => {
    const post = posts.find(p => p.id === postId);
    if (!post?.media) return;
    
    const currentIndex = carouselIndex[postId] || 0;
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = post.media.length - 1;
    if (newIndex >= post.media.length) newIndex = 0;
    
    setCarouselIndex({ ...carouselIndex, [postId]: newIndex });
  };

  useEffect(() => {
    const intervals = {};
    
    posts.forEach(post => {
      if (post.media && post.media.length > 1 && autoSlideEnabled[post.id] !== false) {
        intervals[post.id] = setInterval(() => {
          handleCarouselNav(post.id, 1);
        }, 3000);
      }
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [posts, carouselIndex, autoSlideEnabled]);

  const handleUserInteraction = (postId) => {
    setAutoSlideEnabled({ ...autoSlideEnabled, [postId]: false });
  };

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

          {posts.map((post, index) => {
            const currentIndex = carouselIndex[post.id] || 0;
            return (
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
                
                {post.media ? (
                  <div className="post-media-carousel" onClick={() => handleUserInteraction(post.id)}>
                    <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                      {post.media.map((item, idx) => (
                        <div key={idx} className="carousel-item">
                          {item.type === 'image' ? (
                            <img src={item.url} alt="Post media" />
                          ) : (
                            <video 
                              ref={(el) => (videoRefs.current[`${post.id}-${idx}`] = el)}
                              src={item.url}
                              loop
                              muted
                              playsInline
                              controls
                              style={{ display: idx === currentIndex ? 'block' : 'none' }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    {post.media.length > 1 && (
                      <>
                        <button className="carousel-nav carousel-prev" onClick={() => handleCarouselNav(post.id, -1)}>‹</button>
                        <button className="carousel-nav carousel-next" onClick={() => handleCarouselNav(post.id, 1)}>›</button>
                        <div className="carousel-indicators">
                          {post.media.map((_, idx) => (
                            <button 
                              key={idx} 
                              className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
                              onClick={() => setCarouselIndex({ ...carouselIndex, [post.id]: idx })}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : post.image ? (
                  <div className="post-image">
                    <img src={post.image} alt="Post" />
                  </div>
                ) : post.video ? (
                  <div className="post-video">
                    <video 
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={post.video}
                      loop
                      muted
                      playsInline
                      controls
                    />
                  </div>
                ) : null}
                
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
            );
          })}
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
