import { motion } from "framer-motion";
import Tag from "../components/Tag";

function FeaturedBooks() {
  return (
    <section className="pt-24 md:pt-32" id="ourbooks">
      <motion.h2
        className="text-center text-5xl font-semibold mb-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
      >
        Our Bookshelf
      </motion.h2>

      <div className="flex flex-col sm:flex-row w-screen">
        <div className="sm:w-1/2 bg-[url(/images/modern_web_dev.jpg)] bg-cover bg-center bg-no-repeat brightness-95 hover:brightness-75 duration-300 min-h-[400px] md:min-h-[70vh]"></div>
        <div className="flex flex-col justify-center sm:w-1/2 bg-white p-8 sm:p-12">
          <div className="max-w-5xl mr-auto">
            <motion.div
              className="flex mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              <Tag text="HTML" color="red-400" />
              <Tag text="CSS" color="sky-400" />
              <Tag text="Hosting" color="green-400" />
              <Tag text="SEO" color="sandstorm" />
            </motion.div>
            <motion.h3
              className="text-3xl font-semibold mb-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              Modern Web Development
            </motion.h3>
            <motion.p
              className="text-description text-xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              This fun, colorful book uses diagrams, memory tricks, and stickman to make web development easy. Learn how websites work, build with HTML and CSS, design responsive layouts, and even use AI tools like ChatGPT — plus tips on hosting and legal basics!
            </motion.p>
            <div className="flex gap-4">
              <motion.a
                className="text-lg font-semibold group hover:text-black hover:underline"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                href="https://www.amazon.com/dp/B0DRHDJKFF"
                target="_blank"
                rel="noopener"
              >
                On Amazon (English) ↑
              </motion.a>
              <motion.a
              className="text-lg font-semibold group hover:text-black hover:underline"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
              href="https://www.amazon.de/dp/B0DRHHZF4J"
              target="_blank"
              rel="noopener"
            >
              On Amazon (German) ↑
            </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;
