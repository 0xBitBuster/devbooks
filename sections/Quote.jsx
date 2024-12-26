import { Special_Elite } from "next/font/google";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const specialEliteFont = Special_Elite({
  subsets: ["latin"],
  weight: "400"
});

function Quote() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [animateAuthor, setAnimateAuthor] = useState(false);

  return (
    <section className={`py-20 md:py-32 px-8 text-center ${specialEliteFont.className}`} ref={containerRef}>
      <blockquote className="text-3xl md:text-5xl mb-2">
        {isInView ? (
          <AnimatedText
            text="“An investment in education gives the best returns.”"
            duration={4}
            onComplete={() => setAnimateAuthor(true)}
          />
        ) : null}
      </blockquote>
      <cite>{animateAuthor ? <AnimatedText text="~ Benjamin Franklin" duration={1} /> : null}</cite>
    </section>
  );
}

export default Quote;
