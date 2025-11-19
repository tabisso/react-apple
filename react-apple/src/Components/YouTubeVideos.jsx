import React, { useState, useEffect } from "react";

function YouTubeVideos() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);


useEffect(() => {
   const YOUTUBE_API_KEY = "AIzaSyAgosx6sZBllGJmhFhjEGxV15aLCZi1l9w";
  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
  )
    .then((response) => response.json())
    .then((data) => {
      const youTubeVideos = data.items || [];
      setYouTubeVideos(youTubeVideos);
    })
    .catch((error) => {
      console.error("Error fetching YouTube videos:", error);
    });
}, []);


  // useEffect(() => {

  //   const YOUTUBE_API_KEY = "AIzaSyAgosx6sZBllGJmhFhjEGxV15aLCZi1l9w";

  //   
  //  const fetch(
  //     "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAgosx6sZBllGJmhFhjEGxV15aLCZi1l9w&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const youTubeVideos = data.items || [];
  //       setYouTubeVideos(youTubeVideos);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching YouTube videos:", error);
  //     });
  // }, []); 

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>

          {youTubeVideos.map((singleVideo, i) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            return (
              <div key={vidId || i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default YouTubeVideos
