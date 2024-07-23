import data from './data.json';

const Card = ({ image, heading, description, buttonColor }) => (
  <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
    <img className="h-40 object-cover rounded-xl" src={image} alt="" />
    <div className="p-2">
      <h2 className="font-bold text-lg mb-2">{heading}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="m-2">
      <a role='button' href='#' className={`text-white  px-3 py-1 block w-20 text-center hover:bg-purple-900 rounded-md bg-purple-700`}>Visit</a>
    </div>
  </div>
);

const Projects = () => {
  return (
    < div className='bg-slate-300 w-full min-h-screen'>
    <h1 className='font-bold text-center text-blue-800 text-5xl py-10'>Projects</h1>
    <div className=" gap-4 flex-wrap flex justify-center items-center py-5 my-2">
        
      {data.map((item, index) => (
        <Card 
          key={index}
          image={item.image}
          heading={item.heading}
          description={item.description.length > 80 ?
            `${item.description.substring(0, 80)}...` : item.description
          }
          
        />
      ))}
    </div>
    </div>
  );
};

export default Projects;
