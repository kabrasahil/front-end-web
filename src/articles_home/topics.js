import "./topics.css";
// import image as "./src/download.png";
// import download image
// import image from "./download.png";
function topics() {
  return (
    //  make background color rgb(17 17 17)
    <div className="w-1/3 flex-auto bg-stone-900 flex-wrap px-1">
      <h2 className="text-slate-200 text-xl font font-sans my-auto mx-auto px-3 py-1">
        Recommended Articles
      </h2>

      <div className="flex flex-wrap justify-between">
        <ul className="flex flex-wrap text-sm font-medium text-center text-white font-sans dark:text-gray-400 justify justify-start">
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Economics
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Game Theory 101
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Competitive Programming
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Game Theory in Sports
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Marketing
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Stratagems
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Conflicts
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Mathematics
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
                Psychology
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
                Politics
            </a>
          </li>
          <li className="mr-2 py-2">
            <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
                History
            </a>
          </li>
          <li className="mr-2 py-2">
            {/* <a
              href="#"
              className="inline-block px-4 py-1 rounded-2xl  bg-zinc-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
                Philosophy
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default topics;
