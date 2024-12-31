import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="flex flex-col items-center my-20 px-8" id="contact">
      <motion.h2
        className="text-5xl font-bold mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
      >
        Get in touch.
      </motion.h2>
      <div className="flex flex-col sm:flex-row items-center mb-28">
        <div className="relative w-full sm:w-1/2 mb-16 sm:mb-0 sm:mt-10 sm:mr-12 h-52">
          <motion.div
            initial={{ opacity: 0, right: "0", rotate: 0 }}
            whileInView={{ opacity: 1, right: "12%", rotate: -3 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            className="absolute w-40 h-40 border-2 border-[#a5a58d] right-12 -rotate-[3deg]"
          />
          <motion.div
            initial={{ opacity: 0, right: "0", rotate: 0 }}
            whileInView={{ opacity: 1, right: "20%", rotate: -20 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            className="absolute w-40 h-40 border-2 border-[#a5a58d] right-20 -rotate-[20deg]"
          />
          <motion.div
            initial={{ opacity: 0, right: "0", rotate: 0 }}
            whileInView={{ opacity: 1, right: "52%", rotate: -40, y: 40 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            className="absolute w-40 h-40 border-2 border-[#a5a58d] right-52 -rotate-[40deg] translate-y-10"
          />
          <motion.div
            initial={{ opacity: 0, right: "0", rotate: 0 }}
            whileInView={{ opacity: 1, right: "72%", rotate: -60, y: 80 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            className="absolute w-40 h-40 border-2 border-[#a5a58d] right-72 -rotate-[60deg] translate-y-20"
          />
        </div>
        <div className="sm:w-1/2">
          <motion.p
            className="text-lg font-light mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
          >
            Have questions, feedback, or need assistance? We’re here to help! Reach out to us through any of the following:
          </motion.p>
          <div className="flex gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              <p className="text-description">Email us at</p>
              <a className="text-lg font-semibold" href="mailto:info@devbooks.org">
                info@devbooks.org
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              <p className="text-description">Join our discord</p>
              <a className="text-lg font-semibold" href="https://discord.gg/bVTFpc6rQr" target="_blank">
                DevBooks' Discord
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <footer className="w-full max-w-[1284px] flex items-center justify-end">
        <img src="/logo_transparent.png" className="w-20 mr-6" alt="" />
        <div className="text-lg mr-20">
          <p>
            &copy; Tobias Scharl
          </p>
          <a className="text-sm hover:underline" href="/privacy-policy">
            Privacy Policy
          </a>
          <p className="mx-2 inline-block">&bull;</p>
          <a className="text-sm hover:underline" href="/imprint">
            Imprint
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
