

function Intro() {

    return (
        <div className="h-screen bg-primary flex items-center justify-between px-10 py-5">
            <div className="flex flex-col items-start justify-center gap-8 ">
                <h1 className="text-white text-lg">Hi I'm</h1>
                <h1 className="text-7xl sm:text-4xl drop-shadow-md font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-purple-900 hover:scale-105  transform duration-200">
                    Lokesh Chaudhari
                </h1>
                <h1 className="text-5xl sm:text-3xl text-white font-semibold">
                    I craft solutions!!
                </h1>
                <p className="text-white w-2/3">Passionate junior computer engineering student with 2 years of experience in application development in MERN, C++, and python language...</p>
                <a
                    href="/profilepicture.jpg"
                    download
                    className="block border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200"
                >
                    Resume
                </a>

            </div>
        </div>


    );
}

export default Intro;