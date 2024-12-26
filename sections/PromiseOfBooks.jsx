import { motion } from "framer-motion";

function PromiseOfBooks() {
  return (
    <div className="mx-auto max-w-[1248px] pt-28 md:pt-36 px-6 md:px-10" id="whatido">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="text-center font-semibold text-xl text-description mb-5"
      >
        Passion led us here
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "backOut" }}
        className="text-center text-5xl font-semibold mb-14"
      >
        The Promise of Our Books
      </motion.h2>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
          className="rounded-3xl flex-1 bg-coal"
        >
          <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/dive_in.png" alt="" className="max-w-[120px] mb-6" />
            <h3 className="text-3xl font-semibold mb-4">Dive into coding</h3>
            <p>
              We explain the key concepts in a simple, straightforward way, so you’ll understand what you’re doing and why it works.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
          className="rounded-3xl flex-1 bg-coal"
        >
          <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/color_palette.png" alt="" className="max-w-[120px] mb-6" />
            <h3 className="text-3xl font-semibold mb-4">Colorful Pages</h3>
            <p>
              While other books are filled with boring black-and-white text, we bring concepts to life with colorful diagrams and illustrations.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-3xl flex-1 bg-coal"
        >
          <div className="bg-white h-full border border-coal p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/web.png" alt="" className="max-w-[120px] mb-6" />
            <h3 className="text-3xl font-semibold mb-4">Hands-On Practice</h3>
            <p>
              The best way to learn coding is by doing it. That's why our books focus on real-world projects and hands-on exercises.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PromiseOfBooks;
