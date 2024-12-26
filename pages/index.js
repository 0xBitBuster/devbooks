import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import FeaturedBooks from "@/sections/FeaturedBooks";
import HeroSection from "@/sections/Hero";
import PromiseOfBooks from "@/sections/PromiseOfBooks";
import Quote from "@/sections/Quote";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Developer Books Made Fun | DevBooks</title>
        <meta name="description" content="DevBooks is the place for developers to find top books on HTML, CSS, SEO, Hosting, and more. Whether you're learning to code or sharpening your skills, our books got you covered." />
      </Head>

      <Navbar />
      <HeroSection />
      <PromiseOfBooks />
      <FeaturedBooks />
      <Quote />
      <About />
      <Contact />
    </>
  );
}
