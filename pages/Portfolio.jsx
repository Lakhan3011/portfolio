import tennis from "../public/tennis.png";
import password from "../public/password.jpg";
import dev from "../public/dev.png";
import Image from "next/image";
import Link from "next/link";
import bookStore from "../public/bookStore.jpg";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: password,
      demo: "https://lakhandevspasswordgenerator.netlify.app/",
      code: "https://github.com/Lakhan3011/Password-Generator",
    },
    {
      id: 2,
      src: tennis,
      demo: "https://lakhan3011.github.io/tennis_game/",
      code: "https://github.com/Lakhan3011/tennis_game",
    },
    {
      id: 3,
      src: bookStore,
      demo: "https://book-store-frontend-lakhan3011s-projects.vercel.app/",
      code: "https://github.com/Lakhan3011/Book_Store",
    },
    {
      id: 4,
      src: dev,
      demo: "https://lakhan-porofolio.netlify.app/#Portfolio",
      code: "https://github.com/Lakhan3011/My_Portfolio",
    },
  ];

  return (
    <div className="bg-white w-full md:h-screen dark:bg-gray-900 dark:text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={src}
                width={500}
                height={500}
                quality={80}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <Link
                  href={demo}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </Link>
                <Link
                  href={code}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
