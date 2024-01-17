import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const API_KEY = 'AIzaSyDMPh14d_WgYnv0gFGjJae_2s15eQ9Obk0'; // Replace with your YouTube API key
const CHANNEL_ID = 'UCEsefwwmj2PrQBmVVsWDTeQ'; //  // Replace with your YouTube channel ID

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };

    fetchYouTubeVideos();
  }, []);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const subscribeToChannel = () => {
    // Open the YouTube subscribe URL in a new tab
    window.open(`https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`);
  };
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className=" sticky lg:col-span-2 relative">
          <YouTube
            videoId={selectedVideo ? selectedVideo.id.videoId : ''}
            opts={{
              playerVars: {
                controls: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
              },
            }}
            ref={playerRef}
          />
          {selectedVideo && (
            <div className="mt-4 bg-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">{selectedVideo.snippet.title}</h2>
              <p className="text-gray-700">{selectedVideo.snippet.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Channel Name</h3>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    onClick={subscribeToChannel}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-4">
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                className="cursor-pointer hover:opacity-80 bg-white shadow-lg p-4 rounded-md"
                onClick={() => onVideoSelect(video)}
              >
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full mb-4" />
                <div className="font-bold text-md mb-2">{video.snippet.title}</div>
                <p className="text-gray-700">{video.snippet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
 
};

export default YoutubeVideos;
