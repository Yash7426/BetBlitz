// YouTubePlayer.js

const YouTubePlayer = ({ videoUrl }:{videoUrl:string}) => {
    return (
      <div className="video-container mx-5 ">
        <iframe
          className="w-full min-h-[50rem] h-full"
          src={videoUrl}
          title="YouTube Video Player"
         
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default YouTubePlayer;
  