import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import lakhan from "../public/lakhan.png";

function Homepage({ darkMode, setDarkMode }) {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons ">lakhanDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />{" "}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-4 py-3 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1pYtP84D0inTrJ2Z2lioAWUwTied_2L2j/view?usp=drivesdk"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Lakhan Rajput
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Programmer
            </h3>
            <p className="font-medium py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Aspiring Software Engineer Ready to Contribute !! <br />
              Providing Services for programming and Web Development. Join me
              down below and let's get cracking!
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white cursor-pointer">
              <Link
                href={"https://twitter.com/rajput_lakhan11"}
                target="_blank"
              >
                <AiFillTwitterCircle />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/lakhan-rajput-7853a521a/"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>

              <Link href={"https://github.com/Lakhan3011"} target="_blank">
                <AiFillGithub />
              </Link>
            </div>
            <div className=" relative mx-auto flex justify-center items-center bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 border-2 dark:border-none">
              <Image src={lakhan} layout="fill" objectFit={"cover"} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
