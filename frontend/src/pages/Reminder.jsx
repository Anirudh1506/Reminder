import React, { useState } from "react";
import axios from "axios";

const Reminder = () => {
  const [formData, setFormData] = useState({
    info: "",
    date: "",
    cat: "Daily",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const reminderData = {
      data: formData.info,
      date: formData.date,
      cat: formData.cat,
    };

    const d=new Date();
    d.setHours(0,0,0,0);

    const set=new Date(formData.date);
    if(set<d){
        alert("Not valid");
        setFormData({
            info:'',
            date:'',
            cat:'Daily'
        })  
        return;
    }

    try {
      await axios.post("http://localhost:8080/rem", reminderData);
      setFormData({
        info: "",
        date: "",
        cat: "Daily",
      });

      alert("Reminder created successfully!");
    } catch (error) {
      console.error("Error creating reminder:", error);
      alert("Failed to create reminder.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-blue-500 p-8 rounded-3xl shadow-lg w-full max-w-sm space-y-6"
      >
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Create Reminder</h1>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-white">Info</label>
          <input
            type="text"
            name="info"
            value={formData.info}
            onChange={handleChange}
            className="px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter reminder details"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-white">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-white">Category</label>
          <select
            name="cat"
            value={formData.cat}
            onChange={handleChange}
            className="px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        <input
          type="submit"
          value="Create Reminder"
          className="py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-gray-500 transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Reminder;
