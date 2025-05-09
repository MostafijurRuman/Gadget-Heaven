import { useRouteError } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <div className="text-center">
                <div className="flex justify-center">
                    <FaExclamationTriangle className="text-main text-6xl mb-4" />
                </div>
                <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
                <p className="text-lg mb-4">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="italic text-gray-400">
                    {error.statusText || error.message}
                </p>
                <button
                    onClick={() => (window.location.href = "/")}
                    className="mt-6 px-6 py-2 bg-main text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}