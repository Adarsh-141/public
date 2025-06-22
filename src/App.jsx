import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WatchLater from './pages/WatchLater';
import Timer from './components/Timer';

const App = () => {
  // Step 1: Load from sessionStorage
  const [likes, setLikes] = useState(() => {
    const storedLikes = sessionStorage.getItem('likes');
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  const [watchLater, setWatchLater] = useState(() => {
    const storedWatchLater = sessionStorage.getItem('watchLater');
    return storedWatchLater ? JSON.parse(storedWatchLater) : [];
  });

  // Step 2: Save to sessionStorage on change
  useEffect(() => {
    sessionStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    sessionStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  // Step 3: Toggle handlers
  const handleLike = (id) => {
    setLikes((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const handleToggleWatchLater = (id) => {
    setWatchLater((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <Router>
      <Navbar watchLaterCount={watchLater.length} />
      <Timer />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              likes={likes}
              watchLater={watchLater}
              onLike={handleLike}
              onToggleWatchLater={handleToggleWatchLater}
            />
          }
        />
        <Route
          path="/watch-later"
          element={
            <WatchLater
              likes={likes}
              watchLater={watchLater}
              onLike={handleLike}
              onToggleWatchLater={handleToggleWatchLater}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
