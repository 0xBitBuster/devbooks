import { motion } from "framer-motion";

function About() {
  return (
    <section className="flex flex-col xl:flex-row h-full mx-10 xl:mx-40" id="about">
      <div className="xl:w-3/5 p-6 md:p-12 bg-white">
        <motion.h2 className="text-5xl font-semibold mb-7" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}>
          About Us
        </motion.h2>
        <div className="text-lg">
          <motion.p className="mb-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}>
            Welcome to DevBooks, where developers and knowledge come together! We are a passionate team of programmers, writers, and educators dedicated to creating high-quality resources that help developers thrive.
          </motion.p>

          <motion.p className="mb-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}>
            We believe that learning is a lifelong journey, and the best tools for growth are clear, practical, and inspiring books. Our team is made up of:
          </motion.p>
          <motion.ul className="list-disc pl-6 mb-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}>
            <li className="mb-2">Experienced Developers who have spent years building software and solving real-world challenges.</li>
            <li className="mb-2">Technical Writers skilled at turning complex concepts into easily understandable and rememberable content.</li>
            <li>Educators who want to share knowledge.</li>
          </motion.ul>
          <motion.p className="mb-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}>
            Whether you’re just starting coding project or looking to deepen your knowledge, DevBooks is here to support you. We’re committed to making learning enjoyable and meaningful to everyone.
          </motion.p>
        </div>
      </div>
      <div className="w-full xl:w-3/5 bg-[url(/images/robot_painting.png)] bg-cover bg-center bg-[#d8cded] bg-no-repeat min-h-[400px] xl:min-h-[700px]" />
    </section>
  );
}

export default About;
