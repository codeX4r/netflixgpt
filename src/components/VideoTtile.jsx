const VideoTtile = ({ title, description }) => {
  return (<>
    {/* title, descriptions */}
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    {/* & buttons */}
    <div>
      <button>Play</button>
      <button>More Info</button>
    </div>
  </>)
};
export default VideoTtile;
