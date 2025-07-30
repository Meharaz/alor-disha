import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../RunningProjects/RunningProjects.css'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const projects = [
    {
        title: 'নলকূপ ও পানি শোধনাগার স্থাপন',
        description: 'আপনার সহযোগিতায় আমরা দূর রোহিঙ্গাদের জন্য ইফতার আয়োজন করি। আমাদের এই কল্যাণকর্মে আপ...',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg'
    },
    {
        title: 'দাওয়াহ কার্যক্রম',
        description: 'বিজ্ঞান জনদের ছত্রছায়া দিয়ে ইসলামী চেতনায় উজ্জীবিত করতে আস-সুনাহ ফাউন্ডেশনের দাওয়াহমূলক উদ্যোগ।',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg'
    },
    {
        title: 'স্বাবলীকরণ',
        description: 'এই কার্যক্রমের আওতায় কর্মক্ষম দরিদ্রদের উপার্জন উপকরণ দেয়া হয়।',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg'
    },
    {
        title: 'নলকূপ ও পানি শোধনাগার স্থাপন',
        description: 'আপনার সহযোগিতায় আমরা দূর রোহিঙ্গাদের জন্য ইফতার আয়োজন করি। আমাদের এই কল্যাণকর্মে আপ...',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg'
    },
    {
        title: 'দাওয়াহ কার্যক্রম',
        description: 'বিজ্ঞান জনদের ছত্রছায়া দিয়ে ইসলামী চেতনায় উজ্জীবিত করতে আস-সুনাহ ফাউন্ডেশনের দাওয়াহমূলক উদ্যোগ।',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg'
    },
    {
        title: 'স্বাবলীকরণ',
        description: 'এই কার্যক্রমের আওতায় কর্মক্ষম দরিদ্রদের উপার্জন উপকরণ দেয়া হয়।',
        image: 'https://i.ibb.co/PZgYj6gZ/project1.jpg'
    },
    // Add more slides as needed
];

const RunningProjects = () => {
    return (
        <div className="py-16 px-4 md:px-8 bg-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                চলমান কার্যক্রমসমূহ
            </h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="card bg-base-100 shadow-md border rounded-xl">
                            <figure className="relative">
                                <img
                                    className="rounded-t-xl h-60 w-full object-cover"
                                    src={project.image}
                                    alt={project.title}
                                />
                                <span className="absolute top-2 left-2 bg-white px-2 py-1 text-sm text-orange-500 border border-orange-400 rounded-full flex items-center gap-1">
                                    <FaArrowLeft className="text-xs" />
                                    নিয়মিত কার্যক্রম
                                </span>
                            </figure>
                            <div className="card-body text-left">
                                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                <p className="text-sm text-gray-600">{project.description}</p>
                                <div className="mt-4">
                                    <button className="btn btn-outline btn-sm text-green-600 border-green-500 hover:bg-green-50">
                                        বিস্তারিত দেখুন
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* View All Button */}
            <div className="mt-10">
                <button className="btn btn-success px-6 py-2 text-white text-sm">
                    কার্যক্রমসমূহ →
                </button>
            </div>
        </div>
    );
};

export default RunningProjects;
