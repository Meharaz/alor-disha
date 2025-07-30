import React, { useState } from 'react';

const JoinUs = () => {
    const [selectedTab, setSelectedTab] = useState('নির্ধারিত দান');
    const [donationType, setDonationType] = useState('দৈনিক');
    const [amount, setAmount] = useState(20);
    const [method, setMethod] = useState('বিকাশ');

    const tabs = ['নির্ধারিত দান', 'যাকাত ও সদকা', 'কনফারেন্স', 'স্বেচ্ছাসেবা'];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-2 text-center">আমাদের সাথে যুক্ত হতে পারেন বিভিন্নভাবে</h2>
            <p className="text-center mb-6 text-gray-600">
                আপনি এক কিলিকেই সুন্নাহ ফাউন্ডেশনের সকল কল্যাণমূলক কার্যক্রমের অংশ হতে চান? নিচের যেকোনো একটি পদ্ধতি বেছে নিয়ে সহজেই আমাদের সাথে যুক্ত হতে পারেন।
            </p>

            {/* Tabs */}
            <div className="flex justify-center mb-10 gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-4 py-2 border rounded-lg text-sm ${
                            selectedTab === tab
                                ? 'bg-green-600 text-white'
                                : 'border-gray-300 text-gray-600'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Main content */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Left: Video + Info */}
                <div>
                    <div className="aspect-w-16 aspect-h-9 mb-6">
                        <iframe
                            src="https://www.youtube.com/embed/example"
                            title="Intro Video"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        ></iframe>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">আল্লাহর কাছে গ্রহণযোগ্য দান কিভাবে?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        নির্ধারিত দানের মাধ্যমে, নিয়মিতভাবে, গোপনে এবং শ্রেষ্ঠ সামর্থ্য অনুযায়ী দান করা উচিত...
                    </p>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">যেখানে খরচ:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            <li>সুন্নাহ ভিত্তিক দাওয়াহ কার্যক্রম</li>
                            <li>গরীব শিক্ষার্থীদের শিক্ষা সহায়তা</li>
                            <li>ত্রাণ কার্যক্রম ও শীতবস্ত্র বিতরণ</li>
                        </ul>
                    </div>
                </div>

                {/* Right: Donation Form */}
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-4 text-center">অংশ নিন ফাউন্ডেশনের সকল কল্যাণকার্যে</h3>

                    {/* Donation Type */}
                    <div className="flex justify-center gap-4 mb-4">
                        {['দৈনিক', 'বারিক'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setDonationType(type)}
                                className={`px-4 py-1 rounded-full text-sm ${
                                    donationType === type
                                        ? 'bg-green-600 text-white'
                                        : 'bg-white border border-green-600 text-green-600'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Amount */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        {[10, 20, 50, 100].map((amt) => (
                            <button
                                key={amt}
                                onClick={() => setAmount(amt)}
                                className={`py-2 rounded border text-sm ${
                                    amount === amt
                                        ? 'bg-green-600 text-white'
                                        : 'bg-white border-gray-300 text-gray-700'
                                }`}
                            >
                                ৳ {amt}
                            </button>
                        ))}
                        <input
                            type="number"
                            placeholder="মেয়াদ নির্ধারণ"
                            onChange={(e) => setAmount(e.target.value)}
                            className="col-span-3 p-2 border border-gray-300 rounded"
                        />
                    </div>

                    {/* Form Fields */}
                    <input type="text" placeholder="প্রকল্প" className="w-full mb-3 p-2 rounded border" />
                    <input type="text" placeholder="আপনার নাম" className="w-full mb-3 p-2 rounded border" />
                    <input type="text" placeholder="মোবাইল / ইমেইল" className="w-full mb-3 p-2 rounded border" />
                    <textarea placeholder="যদি আলাদা নামে দান করেন..." className="w-full mb-4 p-2 rounded border" />

                    {/* Payment Methods */}
                    <div className="flex gap-4 justify-center mb-4">
                        {['বিকাশ', 'নগদ', 'ভিসা'].map((m) => (
                            <button
                                key={m}
                                onClick={() => setMethod(m)}
                                className={`px-4 py-1 rounded border ${
                                    method === m
                                        ? 'bg-green-600 text-white'
                                        : 'bg-white border-gray-300 text-gray-700'
                                }`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>

                    <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        প্রক্রিয়া করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
