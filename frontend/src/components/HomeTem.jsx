import { NavLink, Outlet } from 'react-router-dom';

const HomeTem = () => {
  return (
    <div className="flex h-screen">
      {/* Side Navbar */}
      <nav className="bg-blue-800 text-white w-64 h-full px-4 py-6">
        <h1 className="text-2xl font-bold mb-8">Reminders</h1>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 rounded-md bg-blue-600 font-semibold"
                  : "block py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 rounded-md bg-blue-600 font-semibold"
                  : "block py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              }
            >
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/remind"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 rounded-md bg-blue-600 font-semibold"
                  : "block py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              }
            >
              Add Reminder
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="flex-1 bg-white">
        <div className="p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeTem;
