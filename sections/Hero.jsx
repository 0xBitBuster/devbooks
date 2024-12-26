import { motion } from "framer-motion";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-[1248px] pt-14 md:pt-28 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="max-w-xl"
      >
        <p className="text-xl text-description">Hi, we are DevBooks.</p>
        <h1 className="text-4xl md:text-5xl font-bold my-5 md:leading-[60px]">We write Developer Books that "Click"</h1>
        <p className="text-xl text-description mb-9">
          Making Learning Fun. One Page at a Time.
        </p>
        <a className="inline-block rounded-3xl bg-coal cursor-pointer" href="#ourbooks">
          <span className="block w-full h-full bg-sandstorm border border-coal px-6 py-3 rounded-3xl text-lg font-semibold transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            Read our Books
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-1/2 md:w-full mt-12 md:mt-0"
      >
        <img src="/images/hero_mockup.png" className="ml-auto max-h-[500px]" alt="Modern Web Development Book Cover" />
      </motion.div>
    </section>
  );
}

export default HeroSection;
