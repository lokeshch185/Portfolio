

function About() {
    return (
        <div className="min-h-screen w-screen bg-slate-700 flex justify-center items-center">
            <div className="flex w-full  h-auto items-center sm:flex-col  p-8">
                <div className="w-1/2 sm:w-full  flex  justify-evenly">
                    <img src='/profilepicture.jpg' alt="Profile" className="rounded-full shadow-xl w-64 h-64 scale-125  object-cover" />
                </div>
                <div className="flex flex-col w-1/2 sm:w-full sm:mt-8 sm:text-center px-2 gap-10">
                    <h1 className="text-5xl sm:text-4xl drop-shadow-md font-extrabold text-white">About me</h1>
                    <p className="text-white text-wrap">
                        {"Dedicated junior computer engineering student with a 2-year track record in application development, specializing in MERN, C++, and Python. I have designed and implemented web and automation solutions for various organizations. Additionally, I have completed internships in software development engineering (SDE) and cybersecurity roles. I have demonstrated leadership by overseeing technical, research, and creative teams within diverse committees."}
                    </p>
                    {/* <div className="flex justify-center gap-4 ">
                        <div className="bg-gray-100 p-4 rounded-md shadow-lg w-1/4 sm:w-auto text-center">
                            <h2 className="font-bold text-lg">Experience</h2>
                            <p className="text-gray-600">2+ Years</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-md shadow-lg w-1/4 sm:w-auto text-center">
                            <h2 className="font-bold text-lg">Completed</h2>
                            <p className="text-gray-600">4+ Projects</p>
                        </div>
                      
                    </div> */}
                   
                </div>
            </div>
        </div>
    );
}

export default About;
