import React from 'react';

const ContactMe = ({data}) => {
    console.log(data)
    return (
        <div className=" sm:h-auto lg:h-screen  bg-slate-950 flex justify-center items-center ">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 p-8  bg-white shadow-lg rounded-md mx-auto">
                <div className='lg:w-1/2'>
                    <h1 className="text-blue-950 text-3xl font-extrabold">Let's Connect</h1>
                    <p className="text-sm text-gray-600 mt-4 ">
                        I'm open for work/projects. Have a great idea/opportunity?
                    </p>

                    <div className="mt-12">
                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href={data.github} target="_blank" rel="noopener noreferrer">
                                    {/* Add Facebook icon or text here */}
                                </a>
                            </li>
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                                    {/* Add another social icon or text here */}
                                </a>
                            </li>
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href={data.leetcode} target="_blank" rel="noopener noreferrer">
                                    {/* Add another social icon or text here */}
                                </a>
                            </li>
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href={data.codeforces} target="_blank" rel="noopener noreferrer">
                                    {/* Add another social icon or text here */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <form>
                        <div className="">
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                                Full Name <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                                Email <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                                Message <span className="text-red-600">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-mdtext-white text-center hover:bg-[#1d4167] rounded-md bg-[#1c5490] text-white text-bold"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
  