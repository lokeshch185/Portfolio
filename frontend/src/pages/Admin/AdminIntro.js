import axios from "axios";
import { useState } from "react";
import MessageBox from "../../components/Message";
function AdminIntro({ data }) {
  const [formData, setFormData] = useState({
    welcomeText: data.welcomeText || "",
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    caption: data.caption || "",
    description: data.description || "",
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
    try {
      const response = await axios.post("http://localhost:5000/api/update-intro", {
        ...formData,
        _id: data._id,
      });
      if (response.data.success) {
        setMessage(response.data.message);
        setMessageType("success");
      } else {
        setMessage("An error occurred. Please try again.");
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

  return (
    <div className="p-6 w-auto mx-auto bg-white">
      {showMessage && (
        <MessageBox
          type={messageType}
          message={message}
          onClose={handleCloseMessage}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="welcomeText" className="block text-sm font-medium text-gray-700">
            Welcome Text
          </label>
          <input
            type="text"
            name="welcomeText"
            id="welcomeText"
            value={formData.welcomeText}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Welcome Text"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="First Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
            Caption
          </label>
          <input
            type="text"
            name="caption"
            id="caption"
            value={formData.caption}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Caption"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Description"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-tertiary text-white rounded-md hover:bg-[#1d4167]"
          >
            SAVE
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default AdminIntro;
