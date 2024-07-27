// Github.js
import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './github.css'

const Github = () => {
    const [repos, setRepos] = useState([]);
    const username = 'lokeshch185';

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error('Error fetching GitHub data:', error));
    }, []);

    const settings = {

 
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const Card = ({ heading, description, link }) => (
        <div className="bg-[#354763] transform  p-2 duration-300 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer min-h-48 ">
            <div className="p-4">
                <h2 className="font-bold text-lg mb-2 text-white ">{heading}</h2>
                <p className="text-sm text-slate-100">{description}</p>
            </div>
            <div className=" px-4 ">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-3 py-1 block text-center max-w-20 hover:bg-purple-900 rounded-md bg-purple-700"
                >
                    Visit
                </a>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center  px-4">

            <div className="mx-auto  md:w-2/3 lg:w-1/2">
                {/* <h3 className="text-2xl mb-4 text-center">Repositories</h3> */}
                <Slider {...settings}>
                    {repos.map((item) => (
                        <div key={item.id} className="">
                            <Card
                                heading={item.name}
                                description={
                                    item.description
                                        ? item.description.length > 80
                                            ? `${item.description.substring(0, 80)}...`
                                            : item.description
                                        : 'No description available'
                                }
                                link={item.html_url}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="w-full mb-8">
                <div className="scale-90 flex justify-center items-center m-11">
                    <GitHubCalendar
                        username={username}
                        year={2024}
                        colorScheme="light"
                        theme={{
                            light: ['#ebedf0', '#8cc665', '#44a340', '#1e6823', '#0f4913'],
                            dark: ['#333', '#39d353'],
                            text: '#ffffff',

                          }}
                          style={{color:'white'}}
                        
                        labels={{
                            totalCount: '{{count}} contributions in the last year',
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default Github;
