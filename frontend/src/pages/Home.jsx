import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/rem", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const sortedData = response.data.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setData(sortedData);
      })
      .catch((error) => console.error("Error fetching reminders:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 space-y-4">
      <h1 className="text-5xl">Upcoming Events</h1>
      {data.length > 0 ? (
        data.map((d) => (
          <div
            key={d._id}
            className="bg-white w-11/12 md:w-8/12 lg:w-7/12 shadow-lg rounded-lg p-6 mb-6 border-l-4 border-blue-600 hover:border-blue-800 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            <h1 className="text-2xl font-bold text-blue-800 mb-2 hover:text-blue-600 transition-colors duration-300">
              {d.data}
            </h1>
            <p className="text-gray-600 hover:text-gray-700 transition-colors duration-300">
              Reminder Date: {new Date(d.date).toLocaleDateString()}
            </p>
            <p className="mt-4 text-sm text-gray-500 hover:text-gray-600 transition-colors duration-300">
              Category: {d.cat}
            </p>
          </div>
        ))
      ) : (
        <p className="text-lg font-semibold text-gray-500">
          No reminders available.
        </p>
      )}
    </div>
  );
};

export default Home;
