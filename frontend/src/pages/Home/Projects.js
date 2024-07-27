import data from './data.json';
import { useState } from 'react';

const Card = ({ image, heading, description1, onClick, link }) => (
    <div
        className="w-60 bg-white  transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl hover:bg-slate-200 cursor-pointer"
        onClick={onClick}
    >
        <img className="h-40 object-cover p-0" src={image} alt="" />
        <div className="p-2">
            <h2 className="font-bold text-lg mb-2 text-black">{heading}</h2>
            <p className="text-sm text-slate-600">{description1}</p>
        </div>
        <div className="m-2 ">
            <a
                role="button"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-3 py-1 block w-20 text-center hover:bg-[#1d4167] rounded-md bg-[#1c5490] text-pretty text-bold"
            >
                Visit
            </a>

        </div>

    </div>
);

const Projects = () => {
    const [selectedElement, setSelectedElement] = useState(data[0]);

    return (
        <div className="bg-[#195280] w-full sm:h-auto lg:h-screen md:h-screen flex">
            <div className="  flex flex-col w-1/2 sm:hidden sm:mt-10 sm:text-center justify-center  ">
                {selectedElement && (
                    <div className='bg-slate-200 p-8 rounded-r-md ml-0 shadow-lg hover:shadow-2xl hover:bg-gray-200 cursor-pointer'>
                    <div className="text-gray-80">
                        <div className="flex items-center">
                            <img className="h-44  mb-8 mx-auto p-0 rounded-md" src={selectedElement.image} alt="" />
                            <div className="ml-8 mb-8 m">
                                <h1 className="text-3xl font-bold">{selectedElement.heading}</h1>
                                <p className="text-sm mt-2">{selectedElement.description1}</p>
                                
                                <div className="mt-4 ">
                                    <a
                                        role="button"
                                        href={selectedElement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white px-3 py-1 block w-20 text-center hover:bg-[#1d4167] rounded-md bg-[#1c5490] text-pretty text-bold"
                                    >
                                        Visit
                                    </a>

                                </div>

                            </div>
                        </div>


                        <p className="text-sm mt-10">{selectedElement.description2}</p>
                        <div className="mt-10 flex justify-center">
                            {selectedElement.technology.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    </div>
                )}
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center overflow-y-auto no-scrollbar m-12">
                <div className="flex flex-wrap gap-4 justify-center">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            image={item.image}
                            heading={item.heading}
                            description1={
                                item.description1.length > 80
                                    ? `${item.description.substring(0, 80)}...`
                                    : item.description1
                            }

                            link={item.link}
                            onClick={() => setSelectedElement(item)}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Projects;
