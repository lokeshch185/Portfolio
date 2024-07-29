import { useEffect,useState } from "react";
import { Tabs } from "antd";
import Experiences from "./AdminExperiences";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import Projects from "./AdminProjects";
import Social from "./AdminSocials";

const { TabPane } = Tabs;

function Admin() {

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  const [portfolioData, setPortfolioData] = useState(null);
  const [error, setError] = useState(null);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await fetch('http://localhost:5000/api/get-portfolio-data');
       const res = await response.json();
       if (res.success) {
         setPortfolioData(res.data);
       } else {
         setError(res.message || 'Error fetching data');
       }
     } catch (error) {
       setError('Error fetching portfolio data');
     }
   };

   fetchData();
 }, []);

 if (error) {
   return <div>Error: {error}</div>;
 }

 if (!portfolioData) {
   return <div>Loading...</div>;
 }


console.log(portfolioData)
  return (
    <div>
      <div className="flex bg-slate-200 gap-10 items-center px-5 py-2 justify-between">
        <h1 className="text-3xl font-semibold text-black">Admin</h1>
        <h1
          className="underline text-black text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className="px-5 pb-10">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro data={portfolioData.intro}/>
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout data={portfolioData.about}/>
            </TabPane>
            <TabPane tab="Experiences" key="3">
              <Experiences data={portfolioData.experiences}/>
            </TabPane>
            <TabPane tab="Projects" key="4">
              <Projects data={portfolioData.projects}/>
            </TabPane>
            <TabPane tab="Socials" key="5">
              <Social data={portfolioData.socials}/>
            </TabPane>

          </Tabs>
          </div>
      )}
    </div>
  );
}

export default Admin;
