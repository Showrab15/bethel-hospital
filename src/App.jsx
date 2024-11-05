import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800">
      <div className="animate-fadeIn text-center p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg border-4 border-blue-500 border-opacity-50 relative">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 animate-bounce">Website Launching Soon!</h1>
        <p className="text-lg mb-6 text-gray-700">
        An improved healthcare experience is on the way—our new website is coming soon!
        </p>
        
        <div className="absolute inset-0 rounded-lg border-4 border-blue-500 animate-pulse border-opacity-50"></div>
      </div>
    </div>
  );
}

export default App;
