import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <>
      <div className="bg-black min-h-screen w-screen px-6 md:px-40 text-white pt-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
          {/* Left Image Section */}
          <div className="border border-white rounded-2xl p-4 shadow-lg">
            <img
              className="h-96 w-[400px] rounded-2xl object-cover"
              src="./prasanna2.jpg"
              alt="Prasanna"
            />
          </div>

          {/* Right Intro Section with animation */}
          <motion.div
            className="border border-white rounded-2xl p-6 shadow-lg max-w-md"
            initial={{ opacity: 0, y: 50 }} // starting state
            animate={{ opacity: 1, y: 0 }} // end state
            transition={{ duration: 1, delay: 0.3 }} // smooth transition
          >
            <motion.h1
              className="font-bold text-5xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Introduction
            </motion.h1>

            <motion.h2
              className="text-xl pt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
            >
              Hello! My name is{" "}
              <span className="text-pink-400">
                <Typewriter words={["Niraula Prasanna"]} loop={true} cursor />
              </span>
              . <br />I am currently learning <b>BSC.CSIT</b> (Bachelor of
              Computer Science and Information Technology).
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </>
  );
};
