import React from 'react';

const VideoCard = ({ video, liked, onLike, onToggleWatchLater, inWatchLater }) => {
  return (
    <div className="card shadow-sm mb-4 hover-shadow" style={{ width: '18rem' }}>
      <img src={video.thumbnail} className="card-img-top" alt={video.title} />
      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text text-muted">{video.channel}</p>
        <p className="card-text text-muted">{video.views} • {video.time}</p>
        <div className="d-flex gap-2">
          <button onClick={() => onLike(video.id)} className="btn btn-outline-danger btn-sm">
            {liked ? '❤️' : '🤍'} Like
          </button>
          <button onClick={() => onToggleWatchLater(video.id)} className="btn btn-outline-primary btn-sm">
            {inWatchLater ? '➖ Remove' : '➕ Watch Later'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
