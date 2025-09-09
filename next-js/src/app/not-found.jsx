import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <section className="notFound flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h1 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="">Error</span> 404
            </h1>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But don’t worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 font-semibold rounded-full 
                         bg-green-700 text-white 
                         shadow-md transition duration-300 
                         hover:bg-green-800 hover:shadow-lg hover:scale-105 
                         active:scale-95"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
