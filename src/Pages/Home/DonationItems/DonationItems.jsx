import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import overlayImg from '../../../assets/DonationBox/background-overlay-3.svg';

const donations = [
  {
    title: 'নিয়মিত অনুদান তহবিল',
    description: 'অনেকে নিয়মিত দান করতে চান, কিন্তু কোথো বলে না বলে দান করা হয়ে উঠে না। এখন থেকে বিকাশ-নগদ এছাড়াও ভিসা-মাস্টারকার্ড ব্যবহারকারীরা অন-সুস্থির ফাউন্ডেশ...',
    button: 'দান করুন',
    image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
  },
  {
    title: 'বৃক্ষরোপণ তহবিল',
    description: 'গাছ লাগানো একটি সদাকায়ে জারিয়া। হতদরিদ্র গাছটি থেকে পঞ্চাশ বছর পর্যন্ত উপকার ভোগ করবে, তাত্ত্বিক রোপকারীর সওয়াব বৃদ্ধি করবে।',
    button: 'দান করুন',
    image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
  },
  {
    title: 'জরুরি দুর্যোগ তহবিল',
    description: 'প্রতিবছর বর্ষাকালে বাংলাদেশের প্রায় ২৬,০০০ বর্গ কিলোমিটার এলাকা (১৮%) বন্যায় প্রভাবিত হয়। এই সময় বিশেষভাবে দেশের দরিদ্র অঞ্চলগুলোর মানুষ চরম...',
    button: 'দান করুন',
    image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
  },
  {
    title: 'আরও একটি তহবিল',
    description: 'এই তহবিলটি বিশেষ উদ্যোগে তৈরি। দারিদ্র বিমোচন ও জরুরি সেবায় ব্যবহৃত হবে।',
    button: 'দান করুন',
    image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg',
  },
];

const DonationItems = () => {
  return (
    <div
      className="relative bg-white py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${overlayImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Optional white overlay for better contrast */}
      <div className="absolute inset-0 bg-white/80 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">অনুদান তহবিলসমূহ</h2>
          <p className="mt-2 text-lg text-gray-600">চলুন একসাথে পরিবর্তন আনি</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {donations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-center shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <button className="bg-green-600 text-white px-4 w-full py-2 rounded hover:bg-green-700 transition">
                    {item.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 text-center">
          <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
            তহবিলসমূহ →
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationItems;
