import React from 'react';

const blogs = [
    {
        title: 'শুরু হলো দরিদ্র রিকশা-চালকদের মধ্যে রিকশা বিতরণ কার্যক্রম',
        description: 'আলহামদুলিল্লাহ, হালাক্বাহ প্রকল্প ২০২৩-এর আওতায় দরিদ্র রিকশা-চালকদের মধ্যে রিকশা বিতরণ কার্যক্রম শুরু হয়েছে। প্রথম ধাপে ময়মনসিংহ জেলার ৩টি থানায় ৬১...',
        date: '১৯ জুলাই, ২০২৫',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    },
    {
        title: 'সুপেয় পানিবঞ্চিতদের মধ্যে নলকূপ স্থাপন',
        description: 'সুপেয় পানির অভাব ছিল তাদের। তারা কেউ কেউ পানে করতে নদীর পানি, কেউ কেউ দূরবর্তী কোনো বাড়ি থেকে পানি এনে পান করতেন। আলোর দিশা ফাউন্ডেশন...',
        date: '১৯ জুলাই, ২০২৫',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    },
    {
        title: 'শীতবস্ত্র বিতরণ প্রকল্প ২০২২-২৩ সফলভাবে সম্পন্ন',
        description: 'আলহামদুলিল্লাহ, আলোর দিশা ফাউন্ডেশনের “শীতবস্ত্র বিতরণ ২০২২-২৩” প্রকল্প সফলভাবে সম্পন্ন হয়েছে। প্রাধান্যতার ভিত্তিতে দুর্গম অঞ্চল ও দুঃস্থদের বেশির...',
        date: '১৯ জুলাই, ২০২৫',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
    },
];

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">ব্লগসমূহ</h2>

            <div className="grid gap-6 md:grid-cols-3">
                {blogs.map((blog, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border">
                        <img src={blog.image} alt={blog.title} className="rounded-t-2xl w-full h-56 object-cover" />
                        <div className="p-5 text-left">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                                {blog.title}
                            </h3>
                            <p className="text-sm text-gray-700 mb-3 leading-relaxed line-clamp-3">
                                {blog.description}
                            </p>
                            <p className="text-sm text-gray-500">{blog.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-10 bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2 rounded-md transition duration-200">
                আরও দেখুন →
            </button>
        </div>
    );
};

export default Blog;
