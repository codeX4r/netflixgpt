const VideoTitle = ({ title, description }) => {
  return (
    <div className="max-w-xl md:max-w-2xl text-white mt-24 md:mt-32">

      {/* Title */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {title}
      </h1>

      {/* Description */}
      <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 items-center">

        {/* Play Button */}
        <button className="flex items-center gap-3 bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-opacity-80 hover:scale-105 active:scale-95 transition duration-200">

          <svg
            className="w-5 h-5 md:w-6 md:h-6 fill-black"
            viewBox="0 0 24 24"
          >
            <path d="M6 4l15 8-15 8V4z" />
          </svg>

          <span className="tracking-wide">Play</span>
        </button>

        {/* More Info Button */}
        <button className="flex items-center gap-3 bg-gray-500/70 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold backdrop-blur-sm shadow-lg border border-white/10 hover:bg-gray-400/80 hover:scale-105 active:scale-95 transition duration-200">

          <svg
            className="w-5 h-5 md:w-6 md:h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>

          <span className="tracking-wide">More Info</span>
        </button>

      </div>

    </div>
  );
};

export default VideoTitle;