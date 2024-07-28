import { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Experiences.css'

function Experiences({data}) {
    const [selectedElement, setSelectedElement] = useState(data[0]);

    return (
        <div className="min-h-screen w-screen sm:h-auto  bg-slate-900 ">
            <div className="flex w-full items-center sm:flex-col">
                <div className="w-1/2 sm:w-full h-screen sm:h-auto no-scrollbar overflow-y-auto">
                    <VerticalTimeline className="  scale-90 sm:p-5 sm:scale-75  md:h-screen">
                        {data.map((element) => {
                            return (
                                <VerticalTimelineElement
                                    key={element.id}
                                    contentStyle={{
                                        padding: '0.5rem',
                                        boxShadow: '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)',

                                    }}
                                    icon={<img src={element.icon} alt="icon" />}
                                    iconStyle={{ background: '#fff', color: '#000', overflow: 'hidden',   }}
                                    onTimelineElementClick={() => setSelectedElement(element)}
                                    className="hover:transform hover:scale-105 "
                                    date={element.date}
                                    dateClassName="mx-2 text-white "
                              >
                                    <h1 className="pt-1 text-lg font-bold text-blue-950">{element.title}</h1>
                                    <h6 className="text-blue-400 text-xs">{element.company}</h6>
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>
                </div>
                <div className="flex flex-col w-1/2 sm:w-full sm:mt-10 sm:hidden sm:text-center px-10">
                    {selectedElement && (
                        <div className="text-white p-5">

                            <h1 className="text-3xl font-bold">{selectedElement.title}</h1>
                            <h2 className="text-md">{selectedElement.company}</h2>

                            <p className="text-sm mt-10">{selectedElement.description}</p>
                            <div className="mt-10 flex justify-start">
                                {selectedElement.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>



                        </div>
                    )}
                </div>

            </div>
        </div >
    );
}

export default Experiences;
