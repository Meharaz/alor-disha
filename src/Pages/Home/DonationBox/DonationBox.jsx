import React from 'react';
import donationOverlayImg from '../../../assets/DonationBox/background-overlay-1.svg';

const DonationBox = () => {
  return (
    <div
      className="relative mt-8 max-w-5xl mx-auto rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${donationOverlayImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Color Layer with opacity */}
      <div className="bg-orange-300 bg-opacity-80 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          আপনার অনুদান প্রদান করুন
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Tahbil Dropdown */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-sm text-gray-700">
              তহবিল<span className="text-red-600">*</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>নির্বাচন করুন</option>
              <option>ফান্ড ১</option>
              <option>ফান্ড ২</option>
            </select>
          </div>

          {/* Mobile / Email Input */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-sm text-gray-700 flex items-center gap-1">
              মোবাইল / ইমেইল<span className="text-red-600">*</span>
              <span className="tooltip tooltip-top" data-tip="আপনার মোবাইল নাম্বার অথবা ইমেইল দিন">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </span>
            </label>
            <input type="text" placeholder="মোবাইল নম্বর / ইমেইল লিখুন" className="input input-bordered w-full" />
          </div>

          {/* Amount Input */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-sm text-gray-700">
              পরিমাণ<span className="text-red-600">*</span>
            </label>
            <input type="number" placeholder="৳ সংখ্যায় লিখুন" className="input input-bordered w-full" />
          </div>

          {/* Submit Button */}
          <div className="flex items-end">
            <button className="btn btn-success w-full">দান করুন</button>
          </div>
        </form>

        <p className="text-center font-bold mt-4 text-sm text-gray-700">
         আলোর দিশা ফাউন্ডেশনে দান করলে কর রেয়াত পেতে পারেন।{' '}
          <a href="#" className="text-green-600 underline">বিস্তারিত জানতে ক্লিক করুন।</a>
        </p>
      </div>
    </div>
  );
};

export default DonationBox;
