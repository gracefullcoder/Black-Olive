import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>
      <p className="text-2xl mt-4 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-gray-500 mt-2">It might have been moved or deleted.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Go Back to Home
      </Link>
    </section>
  );
}

export default PageNotFound;
