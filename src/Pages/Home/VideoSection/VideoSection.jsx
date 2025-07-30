import React from 'react';

const VideoSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-green-600 font-semibold text-sm bg-green-100 px-3 py-1 rounded-full">
          ভিডিও
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
          আমাদের কার্যক্রম সম্পর্কে ভিডিও
        </h2>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
