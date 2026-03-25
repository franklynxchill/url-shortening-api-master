import Image from "next/image";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Hero from "./components/Hero";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className=" ">
      <main>
        <Hero />
        <Content />
        <Service/>
        <Footer/>
      </main>
    </div>
  );
}
