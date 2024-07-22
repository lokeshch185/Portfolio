import timelineElements from "./timelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experiences() {
    return (
        <div className="bg-[#3da3d5] font-montserrat h-auto">
            <h1 className="text-5xl text-center font-extrabold font-bebas py-10 text-white">Experiences</h1>
            <VerticalTimeline className="max-w-screen-md mx-auto">
                {timelineElements.map((element) => {
                    return (
                        <VerticalTimelineElement
                            key={element.key}
                        
                            contentStyle={{ 
                                padding: '0.5rem', 
                                boxShadow: '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)',
                                
                            }}
                            
                           
                            icon={<img src="https://shorturl.at/4nZfz" alt="icon"/>}
                            iconStyle={{ background: '#fff', color: '#000', height: 'fit', overflow: 'hidden' }}
                            // onTimelineElementClick={gotoPage()}
                        >
                            <div>
                                <h3 className="pt-1 text-2xl font-bold text-blue-950">{element.title}</h3>
                                <h5 className="text-md font-semibold text-blue-700">{element.location}</h5>
                                <p className=" text-xsm text-[#353535]">{element.description}</p>
                            </div>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Experiences;
