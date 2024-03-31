import arrayDestruct from "../public/arrayDestruct.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: "https://tailwindcss.com/docs/guides/vite",
    },
    {
      id: 2,
      src: arrayDestruct,
      demo: "https://tailwindcss.com/docs/guides/vite",
    },
    {
      id: 3,
      src: arrayDestruct,
      demo: "https://tailwindcss.com/docs/guides/vite",
    },
    {
      id: 4,
      src: arrayDestruct,
      demo: "https://tailwindcss.com/docs/guides/vite",
    },
    {
      id: 5,
      src: arrayDestruct,
      demo: "https://tailwindcss.com/docs/guides/vite",
    },
    {
      id: 6,
      src: arrayDestruct,
      demo: "https://tailwindcss.com/docs/guides/vite",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={src}
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
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
