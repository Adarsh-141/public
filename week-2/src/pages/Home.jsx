import React from 'react';
import { videos } from '../data/dummyVideos';
import VideoCard from '../components/VideoCard';

const Home = ({ likes, watchLater, onLike, onToggleWatchLater }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {videos.map(video => (
          <div key={video.id} className="col-sm-6 col-md-4 d-flex justify-content-center">
            <VideoCard
              video={video}
              liked={likes.includes(video.id)}
              inWatchLater={watchLater.includes(video.id)}
              onLike={onLike}
              onToggleWatchLater={onToggleWatchLater}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
