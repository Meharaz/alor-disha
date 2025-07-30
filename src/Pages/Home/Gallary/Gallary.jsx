import React from 'react';

const images = [
    'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    'https://i.ibb.co/PZgYj6gZ/project1.jpg',
];

const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">ছবিসমূহ</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="rounded-xl object-cover w-full h-full"
                    />
                ))}
            </div>

            <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2 rounded-md transition duration-200">
                আরও দেখুন →
            </button>
        </div>
    );
};

export default Gallery;
