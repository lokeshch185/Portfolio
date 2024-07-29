import axios from "axios";
import { useState } from "react";
import MessageBox from "../../components/Message";

function AdminAbout({ data }) {
  const [formData, setFormData] = useState({
    imgUrl: data.imgUrl || "",
    description1: data.description1 || "",
    description2: data.description2 || "",
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
      const response = await axios.post("http://localhost:5000/api/update-about", {
        ...formData,
        _id: data._id,
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

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="m-4">
      {showMessage && (
        <MessageBox
          type={messageType}
          message={message}
          onClose={handleCloseMessage}
        />
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-item">
          <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            id="imgUrl"
            name="imgUrl"
            type="text"
            value={formData.imgUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="form-item">
          <label htmlFor="description1" className="block text-sm font-medium text-gray-700">Description 1</label>
          <textarea
            id="description1"
            name="description1"
            value={formData.description1}
            onChange={handleChange}
            placeholder="Description 1"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-16"
          />
        </div>

        <div className="form-item">
          <label htmlFor="description2" className="block text-sm font-medium text-gray-700">Description 2</label>
          <textarea
            id="description2"
            name="description2"
            value={formData.description2}
            onChange={handleChange}
            placeholder="Description 2"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-end w-full">
          <button
            className="px-10 py-2 bg-tertiary text-white rounded-md shadow-sm hover:bg-[#1d4167] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminAbout;
