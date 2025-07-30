import React, { useState } from 'react';
import { FaCheckCircle, FaBook, FaHandHoldingHeart, FaMosque } from 'react-icons/fa';

const principles = [
    'পবিত্র কুরআন ও আমাদের রাসূল মুহাম্মাদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম)-এর সুন্নাহ ভিত্তিক কর্মনীতিই আলোর দিশা ফাউন্ডেশনের মূল আদর্শ।',
    'সালাফে সালেহীনদের পথ ধরে কুরআন ও সুন্নাহ ভিত্তিক মধ্যপন্থা অবলম্বন করা আমাদের নীতি।',
    'ধর্ম-বর্ণ নির্বিশেষে মানবতার কল্যাণে কাজ করা এবং ন্যায়-নীতি ও সহনশীলতাকে আদর্শ মানা।',
    'উম্মাহর ঐক্য, সহমর্মিতা ও পারস্পরিক শ্রদ্ধাবোধ নীতিকে মেনে চলা।',
    'রাজনৈতিক কর্ম ও অবস্থান গ্রহণ থেকে বিরত থাকা এবং দলমত ও নারী-পুরুষ নির্বিশেষে সকলের জন্য কল্যাণে অঙ্গীকারবদ্ধ থাকা।',
    'সংকটে উপহার দান ও অন্যান্য কল্যাণমূলক কাজে বিতরণে সামাজিক মর্যাদা ও মানবিক অনুভূতিকে জাগ্রত করা।',
    'দাওয়াহ, শিক্ষা, সেবা ও মানবিক সহায়তা ভিত্তিক একটি স্থায়ী মানবিক দায়িত্ব হিসাবে বিবেচনা করা।',
    'সামাজিক সহায়তায় টেকসই দারিদ্র্য নিরসন ও ট্রেনিংভিত্তিক উন্নয়ন বাস্তবায়ন নীতি।'
];
const tabs = [
    {
        label: 'শিক্ষা',
        icon: <FaBook className="text-xl mr-2" />,
        content: [
            'আধুনিক, দীনদার ও মানবিক উপযোগী আদর্শ নাগরিক গঠনে প্রাতিষ্ঠানিক ও অনলাইন শিক্ষাদান।',
            'আলোর দিশা ফাউন্ডেশনকে কেন্দ্র করে স্কুল, কলেজ, বিশ্ববিদ্যালয় ও কারিগরি শিক্ষা প্রতিষ্ঠান প্রতিষ্ঠা।',
            'কর্মমুখী প্রশিক্ষণ ও লক্ষ্য ভিত্তিক মাধ্যমে আত্মনির্ভরশীল ও দক্ষ মানবসম্পদ গড়ে তোলা।',
            'শিক্ষা, গবেষণা ও জ্ঞান চর্চাকে জাতীয় ও আন্তর্জাতিক পরিসরে ছড়িয়ে দেওয়া।',
            'দরিদ্র ও অস্বচ্ছল শিক্ষার্থীদের জন্য বিশেষ সুযোগ ও উপবৃত্তি।',
            'গ্রামে প্রাথমিক শিক্ষা ও কুরআন শিক্ষা নিশ্চিতকরণ।',
            'পাঠাগার প্রতিষ্ঠা।',
        ],
    },
    {
        label: 'সেবা',
        icon: <FaHandHoldingHeart className="text-xl mr-2" />,
        content: [
            'অসহায়, দুস্থ, হতদরিদ্র ও বিপর্যস্ত মানুষের পাশে দাঁড়ানো।',
            'খাদ্য, বস্ত্র, চিকিৎসা, বাসস্থান ও শিক্ষা খাতে কাজ করা।',
            'প্রাকৃতিক দুর্যোগে জরুরি সেবা এবং পুনর্বাসন প্রকল্প বাস্তবায়ন।',
        ],
    },
    {
        label: 'দাওয়াহ',
        icon: <FaMosque className="text-xl mr-2" />,
        content: [
            'সুন্নাহভিত্তিক দাওয়াহ কার্যক্রম পরিচালনা।',
            'বিভিন্ন মিডিয়া ও টেকনোলজির মাধ্যমে দাওয়াহ প্রচার।',
            'সাহিত্য, বই বিতরণ ও মিডিয়া প্রডাকশন।',
        ],
    },
];

const incomeSources = [
    'আন্তর্জাতিক ও দেশীয় মুসলিম দাতব্য প্রতিষ্ঠান এবং মুসলিম জনতার অনুদান।',
    'সদস্য, শুভানুধ্যায়ী ও স্বেচ্ছাসেবীদের অর্থ/সেবা।',
    'স্বেচ্ছায় কাজ করা প্রশিক্ষিত দাতাগণের তহবিল।',
    'ইসলামী ও হালাল পদ্ধতিতে উপার্জিত অর্থ।',
    'যাকাত, ফিতরা, দান ও অন্যান্য অনুমোদিত চ্যানেল।',
];

const financialPolicy = [
    'দাতাগণের অর্থ পেলে নির্ধারিত খাতে দ্রুত ব্যবহার নিশ্চিত করা হয়।',
    'অর্থ গ্রহণ-বিতরণে স্বচ্ছতা ও হিসাব সংরক্ষণ।',
    'প্রতি প্রকল্প শেষে আয়-ব্যয়ের বিস্তারিত হিসাব দাতাদের সামনে উপস্থাপন।',
    'নিয়মিত অডিট ও হিসাব সংরক্ষণে সক্ষমতা নিশ্চিত করা।',
];



const About = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                {/* Left image/video */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://i.ibb.co/PZgYj6gZ/project1.jpg" // Replace with actual image/video thumbnail
                        alt="About Us"
                        className="rounded-xl w-full shadow-md"
                    />
                </div>

                {/* Right text */}
                <div className="w-full md:w-1/2 text-justify text-gray-800 leading-relaxed">
                    <p>
                        আলোর দিশা ফাউন্ডেশন শিক্ষা, দাওয়াহ ও পূর্ণ মানবকল্যাণে নিবেদিত একটি অলাভজনক ও জনসেবামূলক সরকারি নিবন্ধিত প্রতিষ্ঠান।
                        ২০১৭ সালে যাত্রা শুরু। প্রতিষ্ঠাতা চেয়ারম্যান হিসেবে প্রকল্পটির পরিকল্পনা করেন একজন শিক্ষক, মানবতার দিশারী। প্রতিষ্ঠানটি মানুষের দুঃখ,
                        কষ্ট লাঘব করে আল্লাহর সন্তুষ্টি অর্জন, সমাজ-সংস্কার, দাওয়াহ প্রচার, শিক্ষা ও মানবতার কল্যাণে কাজ করছে।
                    </p>
                </div>
            </div>

            {/* Policy and Principles Section */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-5">নীতি ও আদর্শ</h3>
                <ul className="space-y-3 text-gray-800">
                    {principles.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <FaCheckCircle className="text-green-600 mt-1" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">লক্ষ্য-উদ্দেশ্য</h2>

                {/* Tabs */}
                <div className="flex justify-center mb-4 space-x-4">
                    {tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`flex items-center px-5 py-2 rounded-full border transition-all duration-300 ${activeTab === idx
                                    ? 'bg-green-100 text-green-700 border-green-500'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-12 shadow-sm">
                    <ul className="space-y-3 text-gray-800">
                        {tabs[activeTab].content.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-600 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Income Sources */}
                    <div className="bg-gray-100 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold mb-4">তহবিল ও আয়ের উৎস</h3>
                        <ul className="space-y-3 text-gray-800">
                            {incomeSources.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <FaCheckCircle className="text-green-600 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Financial Policy */}
                    <div className="bg-gray-100 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold mb-4">ব্যবস্থাপনা নীতিমালা</h3>
                        <ul className="space-y-3 text-gray-800">
                            {financialPolicy.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <FaCheckCircle className="text-green-600 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
