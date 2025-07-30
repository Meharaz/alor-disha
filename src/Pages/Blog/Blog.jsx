import React, { useState } from 'react';

const Blog = () => {
  const [search, setSearch] = useState('');

  // Sample blog data (replace with real data or API)
  const blogs = [
    {
      id: 1,
      title: 'গরীব রিকশাচালকদের মাঝে রিকশা বিতরণ কার্যক্রম',
      date: '২৯ জুলাই, ২০২৫',
      excerpt: 'শুরু হলো দারিদ্র্য রিকশা-চালকদের মধ্যে রিকশা বিতরণ কার্যক্রম...',
      image: 'https://i.ibb.co/21hjQkSP/image.png',
      featured: true,
    },
    {
      id: 2,
      title: 'সুপেয় পানিবিহীন স্থানে লালপুক স্থাপন',
      date: '২৯ জুলাই, ২০২৫',
      excerpt: 'পানিবিহীন গ্রামগুলোতে আমরা লালপুক স্থাপন করেছি...',
      image: 'https://i.ibb.co/21hjQkSP/image.png',
    },
    {
      id: 3,
      title: 'শীতবস্ত্র বিতরণ প্রকল্প ২০২২-২৩',
      date: '২৯ জুলাই, ২০২৫',
      excerpt: 'শীতার্ত মানুষের জন্য আমাদের শীতবস্ত্র বিতরণ কার্যক্রম চলছে...',
      image: 'https://i.ibb.co/21hjQkSP/image.png',
    },
    {
      id: 4,
      title: 'বন্যাদুর্গতদের মাঝে ত্রাণ বিতরণ ও পুনর্বাসন সহায়তা',
      date: '২৯ জুলাই, ২০২৫',
      excerpt: 'বন্যাকবলিত মানুষের মাঝে খাদ্য ও ত্রাণ সামগ্রী বিতরণ করা হয়েছে...',
      image: 'https://i.ibb.co/21hjQkSP/image.png',
    },
    {
      id: 5,
      title: 'সবাই জন্য কুরবানি-২০২২',
      date: '২৯ জুলাই, ২০২৫',
      excerpt: 'আলোর দিশা ফাউন্ডেশনের উদ্যোগে কুরবানির মাংস বিতরণ করা হয়েছে...',
      image: 'https://i.ibb.co/21hjQkSP/image.png',
    },
    {
      id: 6,
      title: 'এসএসসি পরীক্ষার্থীদের জন্য দোয়া অনুষ্ঠান',
      date: '২৯ জুলাই, ২০২৫',
      excerpt: 'এসএসসি পরীক্ষার্থীদের সফলতার জন্য দোয়া মাহফিলের আয়োজন করা হয়...',
      image: 'https://i.ibb.co/21hjQkSP/image.png',
    },
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="ব্লগ সার্চ করুন"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded"
        />
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          ফিল্টার
        </button>
      </div>

      {/* Featured Blog */}
      {filteredBlogs
        .filter((blog) => blog.featured)
        .map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-10"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full md:w-1/3 h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
              <p className="text-gray-700 text-base">{blog.excerpt}</p>
            </div>
          </div>
        ))}

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredBlogs
          .filter((blog) => !blog.featured)
          .map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{blog.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
                <p className="text-sm text-gray-700">{blog.excerpt}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
