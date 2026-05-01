import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">My App</h2>

        <nav className="space-y-3">
          <Link to="/dashboard" className="block hover:text-blue-600">
            Dashboard
          </Link>

          <Link to="/" className="block hover:text-red-500">
            Logout
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1">

        {/* Navbar */}
        <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
          <h1 className="font-semibold">Dashboard</h1>

          <div className="text-sm text-gray-600">
            Welcome User 👋
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;