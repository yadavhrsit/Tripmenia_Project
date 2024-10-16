function Failure() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <svg
          className="w-16 h-16 text-red-600 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m0-4h.01M12 6v.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h2>
        <p className="text-gray-600 mb-4">Unfortunately, we couldn't process your payment. Please try again or contact support if the issue persists.</p>
        {/* <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 ml-2"
          onClick={() => window.location.href = '/contact-support'}
        >
          Contact Support
        </button> */}
      </div>
    </div>
  );
}

export default Failure;
