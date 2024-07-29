import axios from "axios";
import { useState } from "react";
import MessageBox from "../../components/Message";

function Projects({ data }) {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedprojectForEdit, setSelectedprojectForEdit] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description1: "",
    description2: "",
    link: "",
    technology: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      ...formData,
      technology: formData.technology.split(","),
    };

    try {
      let response;
      if (selectedprojectForEdit) {
        response = await axios.post("http://localhost:5000/api/update-project", {
          ...values,
          _id: selectedprojectForEdit._id,
        });
      } else {
        response = await axios.post("http://localhost:5000/api/add-project", values);
      }

      if (response.data.success) {
        setMessage(response.data.message);
        setMessageType("success");
        setShowAddEditModal(false);
        setSelectedprojectForEdit(null);
        setFormData({
          image: "",
          title: "",
          description1: "",
          description2: "",
          link: "",
          technology: "",
        });
      } else {
        setMessage(response.data.message);
        setMessageType("error");
      }
    } catch (error) {
      setMessage(error.message);
      setMessageType("error");
    }
  };

  const handleDelete = async (project) => {
    try {
      const response = await axios.post("http://localhost:5000/api/delete-project", {
        _id: project._id,
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
  };

  return (
    <div>
      {message && (
        <MessageBox
          type={messageType}
          message={message}
          onClose={() => setMessage("")}
        />
      )}
      <div className="flex justify-end mb-4 mt-2">
        <button
          className="hover:bg-[#1d4167] bg-tertiary text-white px-4 py-2 rounded-md"
          onClick={() => {
            setSelectedprojectForEdit(null);
            setShowAddEditModal(true);
            setFormData({
              image: "",
              title: "",
              description1: "",
              description2: "",
              link: "",
              technology: "",
            });
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
        {data.map((project) => (
          <div key={project._id} className="shadow border p-4 rounded-md flex flex-col">
            <h1 className="text-black text-xl font-bold">{project.title}</h1>
            <hr className="my-2" />
            <img src={project.image} alt="project" className="h-32 w-32 m-auto mb-4" />
            <h1 className="mb-2">Description1: {
              project.description1.length > 80
                ? `${project.description1.substring(0, 80)}...`
                : project.description1
            }</h1>
            <h1 className="mb-2">Description2: {
              project.description2.length > 80
                ? `${project.description2.substring(0, 80)}...`
                : project.description2
            }</h1>
            <p className="mb-2">Link: {project.link}</p>
            <div className="mb-4">
              Technology: {project.technology.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleDelete(project)}
              >
                Delete
              </button>
              <button
                className="bg-tertiary hover:bg-[#1d4167] text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setSelectedprojectForEdit(project);
                  setShowAddEditModal(true);
                  setFormData({
                    image: project.image,
                    title: project.title,
                    description1: project.description1,
                    description2: project.description2,
                    link: project.link,
                    technology: project.technology.join(", "),
                  });
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddEditModal && (
        <div className="fixed inset-0 flex projects-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">
              {selectedprojectForEdit ? "Edit Project" : "Add Project"}
            </h2>
            {message && (
              <MessageBox
                type={messageType}
                message={message}
                onClose={() => setMessage("")}
              />
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="description1" className="block text-sm font-medium text-gray-700">
                  Description1
                </label>
                <input
                  id="description1"
                  name="description1"
                  type="text"
                  placeholder="Description1"
                  value={formData.description1}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="description2" className="block text-sm font-medium text-gray-700">
                  Description2
                </label>
                <input
                  id="description2"
                  name="description2"
                  type="text"
                  placeholder="Description2"
                  value={formData.description2}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                  Link
                </label>
                <input
                  id="link"
                  name="link"
                  type="text"
                  placeholder="Link"
                  value={formData.link}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="technology" className="block text-sm font-medium text-gray-700">
                  Technology
                </label>
                <input
                  id="technology"
                  name="technology"
                  type="text"
                  placeholder="Technology (comma separated)"
                  value={formData.technology}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="border border-gray-300 bg-tertiary hover:bg-[#1d4167] text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setShowAddEditModal(false);
                    setSelectedprojectForEdit(null);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded-md">
                  {selectedprojectForEdit ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
