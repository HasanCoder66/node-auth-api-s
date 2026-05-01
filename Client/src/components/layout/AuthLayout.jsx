const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-xl w-[350px]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;