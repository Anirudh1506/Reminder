import { NavLink, Outlet,useNavigate } from 'react-router-dom';

const HomeTem = ({logOut}) => {
  const nav=useNavigate();
  
  const isAuth=localStorage.getItem('token')

  const btn=isAuth?'LogOut':'Login';

  function handleChange(){
    if(isAuth) return logOut();
    return nav("/log");
  }

  return (
    <div className="flex min-h-screen">
      <nav className="bg-blue-800 text-white w-64 sticky top-0 h-screen px-4 py-6">
        <h1 className="text-2xl font-bold mb-8">Reminders</h1>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/home"
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

          <li>
          <button
              onClick={handleChange}
              className="block py-2 px-4 rounded-md bg-blue-600 font-semibold hover:bg-blue-700 transition-colors"
            >
              {btn}
            </button>
          </li>

        </ul>
      </nav>

      {/* Content */}
      <div className="flex-1 ">
        <div className="p-6  min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeTem;
