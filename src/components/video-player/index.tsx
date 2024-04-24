// YouTubePlayer.js

const YouTubePlayer = ({ videoId="MC5eWI0Aqyw" }) => {
    return (
      <div className="video-container mx-5 ">
        <iframe
          className="w-full min-h-[50rem] h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube Video Player"
         
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default YouTubePlayer;
  