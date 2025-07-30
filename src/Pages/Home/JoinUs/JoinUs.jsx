import React from 'react';
import { FaHandsHelping, FaGift, FaHandHoldingHeart, FaBriefcase } from 'react-icons/fa';

const JoinUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                আমাদের সাথে যুক্ত হন
            </h2>
            <p className="text-gray-600 mb-10">
                নিচের যে কোনো পরিকল্পিত উপায়ে আমাদের সাথে যুক্ত হয়ে আত্মমানবতার সেবায় ভূমিকা রাখতে পারেন।
            </p>

            <div className="grid gap-6">
                <div className="border-2 border-green-600 border-dashed rounded-2xl bg-green-700 text-white py-12 px-6 flex flex-col items-center justify-center">
                    <FaHandHoldingHeart className="text-4xl mb-4" />
                    <span className="text-xl font-semibold">নিয়মিত দাতা</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-2 border-blue-400 border-dashed rounded-2xl bg-blue-500 text-white py-10 px-4 flex flex-col items-center">
                        <FaGift className="text-4xl mb-4" />
                        <span className="text-lg font-semibold">আজীবন ও দাতা সদস্য</span>
                    </div>
                    <div className="border-2 border-yellow-400 border-dashed rounded-2xl bg-yellow-400 text-white py-10 px-4 flex flex-col items-center">
                        <FaHandsHelping className="text-4xl mb-4" />
                        <span className="text-lg font-semibold">স্বেচ্ছাসেবক</span>
                    </div>
                    <div className="border-2 border-purple-500 border-dashed rounded-2xl bg-purple-700 text-white py-10 px-4 flex flex-col items-center">
                        <FaHandHoldingHeart className="text-4xl mb-4" />
                        <span className="text-lg font-semibold">রক্ত দাতা</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
