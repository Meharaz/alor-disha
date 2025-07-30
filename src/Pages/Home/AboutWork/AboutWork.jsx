import React from 'react';
import { FaGraduationCap, FaHandsHelping, FaBookOpen } from 'react-icons/fa';

const AboutWork = () => {
    return (
        <div className="py-16 px-4 md:px-8 bg-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                উম্মাহর স্বার্থে, সুনাহর সাথে
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* শিক্ষা */}
                <div className="p-6 rounded-lg shadow hover:shadow-md border">
                    <FaGraduationCap className="text-4xl text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">শিক্ষা</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        দ্বীনি ও সাধারণ শিক্ষায় সমন্বিত সিলেবাসের মাদরাসা প্রতিষ্ঠান; স্কুল, কলেজ ও বিশ্ববিদ্যালয়সহ বিভিন্ন সাধারণ ও কারিগরি বিদ্যালয় প্রতিষ্ঠা; এছাড়া অপ্রাতিষ্ঠানিক শিক্ষার উদ্যোগ গ্রহণ
                    </p>
                </div>

                {/* সেবা */}
                <div className="p-6 rounded-lg shadow hover:shadow-md border">
                    <FaHandsHelping className="text-4xl text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">সেবা</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        দরিদ্রদের স্বাবলীকরণ, বন্যার্তদের ত্রাণ ও পুনর্বাসন, নগরূপ ও পানি শোধনাগার স্থাপন, শীতবস্ত্র বিতরণ, ইফতার বিতরণ, সকলের জন্য কুরবানিসহ বিভিন্ন সেবামূলক কার্যক্রম
                    </p>
                </div>

                {/* দাওয়াহ */}
                <div className="p-6 rounded-lg shadow hover:shadow-md border">
                    <FaBookOpen className="text-4xl text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">দাওয়াহ</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        বই-পুস্তক রচনা ও প্রকাশনা, মসজিদ ও আদিত্যরিয়াভিত্তিক দ্বীনি হলাকাহ, দাওয়াহ বিষয়ক প্রশিক্ষণ ও কর্মশালাসহ অনলাইন-অফলাইনভিত্তিক বহুমাত্রিক কার্যক্রম
                    </p>
                </div>
            </div>

            {/* Button */}
            <div className="mt-10">
                <button className="btn btn-success text-white px-6 py-2">
                    আরও জানুন →
                </button>
            </div>
        </div>
    );
};

export default AboutWork;
