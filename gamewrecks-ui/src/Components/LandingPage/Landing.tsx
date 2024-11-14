import Features from "./Features";
import CommonQuestions from "./CommonQuestions";
import Tutorial from "./Tutorial";
import NavBar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Landing() {
  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-4 py-8">
      <NavBar />
      <Hero />
      <section className="container mx-auto mt-20 flex flex-col items-center justify-center gap-10">
        <Features />
      </section>
      <section className="container mx-auto mt-20 flex flex-col items-center justify-center gap-10">
        <Tutorial />
      </section>
      <section className="container mx-auto max-w-3xl mt-20 flex flex-col items-center justify-center gap-10">
        <CommonQuestions />
      </section>
      <Footer />
    </div>
  );
}
