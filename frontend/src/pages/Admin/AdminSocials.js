import axios from "axios";
import { useState } from "react";
import MessageBox from "../../components/Message"; // Ensure this path is correct

function Social({ data }) {
  const [formData, setFormData] = useState({
    leetcode: data.leetcode || "",
    linkedin: data.linkedin || "",
    github: data.github || "",
    codeforces: data.codeforces || "",
    instagram: data.instagram || "",
    name: data.name || "",
    email: data.email || "",
    mobile: data.mobile || "",
    address: data.address || "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success"); // or "error" based on your needs
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
      const response = await axios.post("http://localhost:5000/api/update-social", {
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
    <div className="p-6 w-auto mx-auto bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="leetcode" className="block text-sm font-medium text-gray-700">
            LeetCode
          </label>
          <input
            type="text"
            name="leetcode"
            id="leetcode"
            value={formData.leetcode}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="LeetCode URL"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="LinkedIn URL"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="github" className="block text-sm font-medium text-gray-700">
            GitHub
          </label>
          <input
            type="text"
            name="github"
            id="github"
            value={formData.github}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="GitHub URL"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="codeforces" className="block text-sm font-medium text-gray-700">
            Codeforces
          </label>
          <input
            type="text"
            name="codeforces"
            id="codeforces"
            value={formData.codeforces}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Codeforces URL"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
            Instagram
          </label>
          <input
            type="text"
            name="instagram"
            id="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Instagram URL"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Mobile"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Address"
          />
        </div>

        <div className="flex justify-end mb-2">
          <button
            type="submit"
            className="px-4 py-2 bg-tertiary text-white rounded-md hover:bg-[#1d4167]"
          >
            SAVE
          </button>
        </div>
      </form>

      {showMessage && (
        <MessageBox
          type={messageType}
          message={message}
          onClose={handleCloseMessage}
        />
      )}
    </div>
  );
}

export default Social;
