import axios from "axios";
import { useState } from "react";
import MessageBox from "../../components/Message";

function Experiences({ data }) {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedexperienceForEdit, setSelectedexperienceForEdit] = useState(null);
  const [type, setType] = useState("add");


  const [formData, setFormData] = useState({
    icon: "",
    title: "",
    company: "",
    date: "",
    description: "",
    skills: "",
  });


  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      icon: formData.icon,
      title: formData.title,
      company: formData.company,
      date: formData.date,
      description: formData.description,
      skills: formData.skills.split(","),
    };

    try {
      let response;
      if (selectedexperienceForEdit) {
        response = await axios.post("http://localhost:5000/api/update-experience", {
          ...values,
          _id: selectedexperienceForEdit._id,
        });
      } else {
        response = await axios.post("http://localhost:5000/api/add-experience", values);
      }

      if (response.data.success) {
        setMessage(response.data.message);
        setMessageType("success");
        setShowAddEditModal(false);
        setSelectedexperienceForEdit(null);
      } else {
        setMessage(response.data.message);
        setMessageType("error");
      }
    } catch (error) {
      setMessage(error.message);
      setMessageType("error");
    }
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  const handleEditClick = (experience) => {
    setSelectedexperienceForEdit(experience);
    setFormData({
      icon: experience.icon,
      title: experience.title,
      company: experience.company,
      date: experience.date,
      description: experience.description,
      skills: experience.skills.join(", "),
    });
    setShowAddEditModal(true);
    setType("edit");
  };

  const onDelete = async (experience) => {
    try {
      const response = await axios.post("http://localhost:5000/api/delete-experience", {
        _id: experience._id,
      });

      if (response.data.success) {
        setMessage(response.data.message);
        setMessageType("success");
      } else {
        setMessage(response.data.message);
        setMessageType("error");
      }
    } catch (error) {
      setMessage(error.message);
      setMessageType("error");
    }
    setShowMessage(true);
  };

  return (
    <div>
      {showMessage && (
        <MessageBox
          type={messageType}
          message={message}
          onClose={handleCloseMessage}
        />
      )}
      <div className="flex justify-end mb-4 mt-2">

        <button
          className="bg-tertiary hover:bg-[#1d4167] px-5 py-2 text-white rounded-md"
          onClick={() => {
            setSelectedexperienceForEdit(null);
            setFormData({
              icon: "",
              title: "",
              company: "",
              date: "",
              description: "",
              skills: "",
            });
            setShowAddEditModal(true);
            setType("add");
          }}
        >
          Add Experience
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {data.map((experience) => (
          <div key={experience._id} className="shadow border p-5 border-gray-400 flex flex-col">
            <h1 className="text-black text-xl font-bold">{experience.title}</h1>
            <hr className="my-2" />
            <img src={experience.icon} alt="icon" className="h-20 w-20 m-auto" />
            <h1>Company: {experience.company}</h1>
            <h1>Date: {experience.date}</h1>
            <p>{
              experience.description.length > 80
                ? `${experience.description.substring(0, 80)}...`
                : experience.description
            }</p>
            <div className="mt-4">
              Skills: {experience.skills.map((skill, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-md"
                onClick={() => onDelete(experience)}
              >
                Delete
              </button>
              <button
                className="bg-tertiary hover:bg-[#1d4167] text-white px-5 py-2 rounded-md"
                onClick={() => handleEditClick(experience)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddEditModal && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex experiences-center justify-center z-50">

          <div className="bg-white rounded-md p-5 w-3/4 max-w-lg">

            <h2 className="text-lg font-semibold mb-4">
              {selectedexperienceForEdit ? "Edit Experience" : "Add Experience"}
            </h2>
            {showMessage && (
              <MessageBox
                type={messageType}
                message={message}
                onClose={handleCloseMessage}
              />
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="icon" className="block text-sm font-medium text-gray-700">Icon</label>
                <input
                  id="icon"
                  name="icon"
                  type="text"
                  value={formData.icon}
                  onChange={handleChange}
                  placeholder="Icon URL"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  id="date"
                  name="date"
                  type="text"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Date"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                <input
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Skills (comma separated)"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-tertiary hover:bg-[#1d4167] text-white px-5 py-2 rounded-md mr-2"
                  onClick={() => {
                    setShowAddEditModal(false);
                    setSelectedexperienceForEdit(null);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-green-900 text-white px-5 py-2 rounded-md">
                  {selectedexperienceForEdit ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </div>
  );
}

export default Experiences;

