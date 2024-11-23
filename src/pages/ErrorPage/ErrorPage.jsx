import { Link } from 'react-router-dom';
// error page
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-gray-800">
      <div className="text-center p-8 max-w-lg mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full animate-wave opacity-20 " style={{ clipPath: 'circle(70% at 50% 50%)' }}></div>
        <h1 className="text-6xl font-bold text-blue-600 mb-4 animate-bounce">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          Oops! It looks like this page{` doesn't`} exist. Let us help you find your way back.
        </p>
        
        <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-transform duration-200 hover:scale-105 shadow-lg">
          Return Home
        </Link>
        
        <div className="mt-10">
          <p className="text-gray-500 text-sm">If you need immediate assistance, please contact us directly.</p>
          <p className="text-gray-500 text-sm">Our team is here to help you.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
