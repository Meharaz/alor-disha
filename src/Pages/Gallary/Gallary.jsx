import React, { useState } from 'react';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('ছবি');
    const [activeCategory, setActiveCategory] = useState('শীতবস্ত্র বিতরণ');
    const [activeYear, setActiveYear] = useState('২০২৫');
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ['শীতবস্ত্র বিতরণ', 'ইফতার', 'বন্যা ত্রাণ', 'কুরবানি'];
    const years = ['২০২৫', '২০২৪', '২০২৩', '২০২২', '২০২১', '২০১৯'];

    const photos = [
        // Replace with actual image paths
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    ];

    const totalPages = 5;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Tabs */}
            <div className="flex justify-center mb-6">
                {['ছবি', 'ভিডিও'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 text-sm font-medium border rounded-t-md ${
                            activeTab === tab
                                ? 'bg-green-100 text-green-700 border-green-600'
                                : 'text-gray-500 border-gray-300'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Category filter */}
                <div className="md:w-1/5 space-y-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`w-full text-left px-4 py-2 rounded-lg ${
                                activeCategory === cat
                                    ? 'bg-green-100 text-green-700 border-l-4 border-green-600'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Year filter */}
                <div className="md:w-4/5">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`px-4 py-1 rounded-full text-sm ${
                                    activeYear === year
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-100 text-gray-700'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {photos.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`gallery-${index}`}
                                className="rounded-xl w-full h-52 object-cover"
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-6 space-x-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="px-2 py-1 text-gray-600 hover:text-black"
                        >
                            ‹
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 rounded-full ${
                                    currentPage === i + 1
                                        ? 'bg-green-600 text-white'
                                        : 'text-gray-700 bg-gray-100'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="px-2 py-1 text-gray-600 hover:text-black"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
