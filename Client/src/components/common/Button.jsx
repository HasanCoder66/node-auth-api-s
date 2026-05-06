const Button = ({ text, onClick, type="submit", loading }) => {
  console.log(loading)
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 
        ${loading 
          ? "bg-gray-500 cursor-not-allowed opacity-70 text-gray-200" // Loading state styles
          : "bg-blue-600 hover:bg-blue-700 text-white"              // Normal state styles
        }`}
       
    >
      {text}
    </button>
  );
};

export default Button;