const VideoTitle = ({ title, description }) => {
  return (
    <div className="text-white ">

      {/* 🎬 Title */}
      <h1 className="
       -mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
        font-extrabold leading-tight drop-shadow-lg
      ">
        {title}
      </h1>

      {/* 📝 Description */}
      <p className="
        mt-3 
        text-xs sm:text-sm md:text-base lg:text-lg 
        text-gray-300 
        leading-relaxed 
        line-clamp-3
        max-w-md md:max-w-xl
      ">
        {description}
      </p>

      {/* 🎯 Buttons */}
      <div className="mt-5 flex flex-wrap gap-3 items-center">

        {/* ▶ Play Button */}
        <button className="
          flex items-center gap-2 
          bg-white text-black 
          px-4 py-2 md:px-6 md:py-3 
          rounded-md font-semibold 
          hover:bg-gray-200 
          transition
        ">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 fill-black"
            viewBox="0 0 24 24"
          >
            <path d="M6 4l15 8-15 8V4z" />
          </svg>
          <span>Play</span>
        </button>

        {/* ℹ More Info Button */}
        <button className="
          flex items-center gap-2 
          bg-gray-500/70 text-white 
          px-4 py-2 md:px-6 md:py-3 
          rounded-md font-semibold 
          backdrop-blur-md 
          hover:bg-gray-400/80 
          transition
        ">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          <span>More Info</span>
        </button>

      </div>

    </div>
  );
};

export default VideoTitle;