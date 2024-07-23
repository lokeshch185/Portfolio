import { useState } from "react";
import timelineElements from "./timelineElements";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Experiences() {
    const [selectedElement, setSelectedElement] = useState(null);

    return (
        <div className="min-h-screen w-screen bg-slate-900 flex justify-center items-center">
            <div className="flex w-full h-auto items-center sm:flex-col ">
                <div className="w-1/2 sm:w-full h-screen no-scrollbar overflow-y-auto ">
                    <VerticalTimeline>
                        {timelineElements.map((element) => {
                            return (
                                <VerticalTimelineElement
                                    key={element.id}
                                    contentStyle={{
                                        padding: '0.5rem',
                                        boxShadow: '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)',
                                     

                                    }}
                                    icon={<img src="https://shorturl.at/4nZfz" alt="icon" />}
                                    iconStyle={{ background: '#fff', color: '#000', height: 'fit', overflow: 'hidden' }}
                                    onTimelineElementClick={() => setSelectedElement(element)}
                                >
                                    <div>
                                        <h1 className="pt-1 text-md font-bold text-blue-950">{element.title}</h1>
                                        <h2 className="text-sm font-semibold text-blue-700">{element.location}</h2>
                                    </div>
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>
                </div>
                <div className="flex flex-col w-1/2 sm:w-full sm:mt-8 sm:text-center px-2 gap-10">
                    {selectedElement && (
                        <div className="text-white">
                            <h1 className="text-2xl font-bold">{selectedElement.title}</h1>
                            <h2 className="text-xl">{selectedElement.location}</h2>
                            <p className="text-sm">{selectedElement.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experiences;
