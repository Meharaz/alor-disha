import React from 'react';

const projects = [
    {
        title: 'সবার জন্য কুরবানি',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        description: 'আলোর দিশা ফাউন্ডেশনের পক্ষ থেকে দুঃস্থ, অসহায় ও দরিদ্র মানুষের মাঝে কুরবানির গোশত বিতরণ করা হয়েছে।',
    },
    {
        title: 'দক্ষতাভিত্তিক উদ্যোগ তৈরী',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        description: 'দরিদ্র তরুণদের জন্য হালাল আয়ের ব্যবস্থা করতে বিশেষ প্রশিক্ষণের ব্যবস্থা করা হয়েছে।',
    },
    {
        title: 'সুবহানাল্লাহ পানি সরবরাহ',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
        description: 'বিভিন্ন অঞ্চলে বিশুদ্ধ পানির ট্যাংক সরবরাহ করা হয়েছে।',
    },
    // ... Add other projects here
];

const Works = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">আমাদের কার্যক্রম</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-52 w-full object-cover"
                        />
                        <div className="p-5 space-y-2">
                            <p className="text-sm text-orange-600 font-medium">বিশেষ কার্যক্রম</p>
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 text-sm">{project.description}</p>
                            <button className="mt-3 px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition">
                                বিস্তারিত দেখুন
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
