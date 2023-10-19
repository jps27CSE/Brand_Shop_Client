const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        404 Not Found
      </h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default ErrorPage;
