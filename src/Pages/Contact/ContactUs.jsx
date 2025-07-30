import React, { useState } from 'react';

const ContactUs = () => {
  const [faqOpen, setFaqOpen] = useState(true);

  const toggleFAQ = () => setFaqOpen(!faqOpen);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* যোগাযোগ ফর্ম */}
        <div>
          <h2 className="text-xl font-bold mb-4">যোগাযোগ ফর্ম</h2>
          <form className="space-y-4">
            <input type="text" placeholder="আপনার নাম *" className="w-full p-2 border rounded" required />
            <input type="email" placeholder="আপনার ইমেইল *" className="w-full p-2 border rounded" required />
            <input type="text" placeholder="বিষয় *" className="w-full p-2 border rounded" required />
            <textarea rows="5" placeholder="বার্তা *" className="w-full p-2 border rounded" required />
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">প্রেরণ করুন</button>
          </form>
        </div>

        {/* আমাদের ঠিকানা */}
        <div>
          <h2 className="text-xl font-bold mb-4">আমাদের ঠিকানা</h2>
          <iframe
            src="https://www.google.com/maps?q=Chowdhury+Tower,+Alkaran,+Kotwali,+Chattogram,+Bangladesh&output=embed"
            width="100%"
            height="250"
            className="rounded mb-4 border"
            loading="lazy"
            title="Google Map"
          />
          <div className="text-gray-700 space-y-2">
            <div>📞 ফোন: +৮৮০১৮৬১৬৯৯৩৭৬</div>
            <div>📍 ঠিকানা: চৌধুরী টাওয়ার, আলকরন, কোতোয়ালি, চট্টগ্রাম, বাংলাদেশ</div>
            <div>✉️ ইমেইল: alordishafoundation@gmail.com</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {/* FAQ Navigation */}
          <div className="col-span-2">
            <ul className="space-y-2 text-green-600 font-medium">
              <li className="hover:underline cursor-pointer">কার্যক্রম</li>
              <li className="hover:underline cursor-pointer">যোগাযোগ</li>
              <li className="hover:underline cursor-pointer">গোপনীয়তা</li>
              <li className="hover:underline cursor-pointer">দান ও অনুদান</li>
              <li className="hover:underline cursor-pointer">ভলান্টিয়ার নীতিমালা</li>
              <li className="hover:underline cursor-pointer">সার্টিফিকেট</li>
              <li className="hover:underline cursor-pointer">চাকরি</li>
            </ul>
          </div>

          {/* FAQ Content */}
          <div className="col-span-3">
            <div className="border rounded">
              <div
                onClick={toggleFAQ}
                className="cursor-pointer bg-gray-100 px-4 py-3 font-semibold flex justify-between items-center"
              >
                আলোর দিশা ফাউন্ডেশন কী কী বিষয়ে কাজ করে?
                <span>{faqOpen ? '−' : '+'}</span>
              </div>
              {faqOpen && (
                <div className="p-4 text-gray-700">
                  আলোর দিশা ফাউন্ডেশন শিক্ষা, সেবা ও মানবিক সহায়তা নিয়ে কাজ করে।
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
