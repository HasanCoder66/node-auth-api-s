const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      {/* Card 1 */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-gray-500">Users</h3>
        <p className="text-2xl font-bold">120</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-gray-500">Active Sessions</h3>
        <p className="text-2xl font-bold">45</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-gray-500">Revenue</h3>
        <p className="text-2xl font-bold">$2,300</p>
      </div>

      {/* Activity Section */}
      <div className="md:col-span-3 bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-3">Recent Activity</h3>

        <ul className="space-y-2 text-sm text-gray-600">
          <li>User Ali signed up</li>
          <li>Password reset requested</li>
          <li>New login from Chrome</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;